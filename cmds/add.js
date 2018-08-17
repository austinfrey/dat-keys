const path = require('path')
const hyperdb = require('hyperdb')
const {isValidKey, homeDir} = require('./helpers.js')

const keysDir = path.join(homeDir(), '.keys')
const db = hyperdb(keysDir, {valueEncoding: 'utf8'})

function add(key, datKey) {
	db.ready(() => {
		if (isValidKey(datKey) === false) {
			return console.error(
				new Error('Not a valid DAT key').message
			)
		}

		db.put(key, datKey, err => {
			if (err) {
				throw err
			}
		})
	})
}

module.exports = add
