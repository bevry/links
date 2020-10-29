/* eslint no-cond-assign:0 */
import kava from 'kava'
import links, { Link } from './index.js'
import fetch from 'node-fetch'
import { env } from 'process'
const { SETTER_AUTH } = env

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

const keys = Object.keys(links)

kava.suite('links', function (suite, test) {
	test('all links resolve to a valid url', function () {
		keys.forEach(function (key, index) {
			let value = links[key],
				destination
			// recurse
			while ((destination = getLink(value))) {
				if (destination === value) {
					console.error({ key, value, destination })
					throw new Error(`link [${key}] points to itself`)
				}
				value = destination
			}
			// check resolves to a full entry
			if (typeof value === 'string') {
				console.error({ key, value })
				throw new Error(
					`link [${key}] did not resolve to a full entry with [${value}]`
				)
			}
			// check has a valid url
			if (!value.url || /^[a-zA-Z-]+$/.test(value.url)) {
				console.error({ key, value })
				throw new Error(`link [${key}] results in invalid url [${value.url}]`)
			}
			// check there are no items after this that contains it
			for (const other of keys.slice(index + 1)) {
				if (other.startsWith(key)) {
					console.error({ key, value, other })
					throw new Error(
						`link [${key}] had an item later that contains it [${other}]`
					)
				}
			}
			// update
			links[key] = value
		})
	})

	test('saving to deployment', function (done) {
		if (!SETTER_AUTH) {
			console.warn(new Error('auth is missing'))
			return done()
		}
		const setter = `https://editor.bevry.workers.dev/setter?auth=${SETTER_AUTH}&key=links`
		const value = JSON.stringify(links)
		fetch(setter, {
			method: 'PUT',
			body: value,
		})
			.then((res) => res.text())
			.then(() => done())
			.catch((e) => done(e.toString().replace(SETTER_AUTH, 'redacted')))
	})
})
