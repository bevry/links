/* eslint no-cond-assign:0 */
import kava from 'kava'
import links, { Link } from './index.js'
import { fetch } from 'fetch-h2'

function getURL(value: Link | string): string {
	if (typeof value === 'string') {
		return value
	} else {
		return value.url
	}
}
function getLink(value: Link | string): Link | string {
	return links[getURL(value)]
}

kava.suite('links', function(suite, test) {
	test('all aliases are valid', function() {
		Object.keys(links).forEach(function(key) {
			let value = links[key],
				destination
			// recurse
			while ((destination = getLink(value))) {
				value = destination
			}
			// convert
			if (typeof value === 'string') {
				value = { url: value }
			}
			// check
			if (!value.url || /^[a-zA-Z-]+$/.test(value.url)) {
				throw new Error(`[${key}] results in invalid url [${value.url}]`)
			}
			// update
			links[key] = value
		})
	})

	test('saving to deployment', function(done) {
		const auth = process.env.SETTER_AUTH
		if (!auth) {
			console.warn(new Error('auth is missing'))
			return done()
		}
		const setter = `https://editor.bevry.workers.dev/setter?auth=${auth}&key=links`
		const value = JSON.stringify(links)
		fetch(setter, {
			method: 'PUT',
			body: value
		})
			.then(res => res.text())
			.then(() => done())
			.catch(e => done(e.toString().replace(auth, 'redacted')))
	})
})
