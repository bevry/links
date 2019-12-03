import kava from 'kava'
import links from './index.js'
import { fetch } from 'fetch-h2'

kava.suite('links', function(suite, test) {
	test('all aliases are valid', function() {
		Object.keys(links).forEach(function(key) {
			const value = links[key]
			let alias = ''
			if (typeof value === 'string') {
				if (/^[a-zA-Z-]+$/.test(value)) {
					alias = value
				}
			} else if (/^[a-zA-Z-]+$/.test(value.url)) {
				alias = value.url
			}
			if (alias && !links[alias]) {
				throw new Error(`[${key}] has missing alias of [${alias}]`)
			}
		})
	})
	test('saving to deployment', function(done) {
		const auth = process.env.SETTER_AUTH
		if (!auth) {
			console.warn(new Error('auth is missing'))
			return done()
		}
		const setter = `https://editor.bevry.workers.dev/setter?auth=${auth}&key=redirects`
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
