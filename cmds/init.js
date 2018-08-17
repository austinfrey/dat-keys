const path = require('path')
const hyperdb = require('hyperdb')
const dedent = require('dedent')
const {isValidKey, homeDir} = require('./helpers')

const keysDir = path.join(homeDir(), '.keys')

function init(key) {
	if (isValidKey(key) === false) {
		return console.error(
			new Error('Not a valid Dat key').message
		)
	}

	const db = hyperdb(keysDir, key, {valueEncoding: 'utf8'})

	db.ready(() => {
		return console.log(dedent`
      New key store created at ${keysDir}
      Link: dat://${db.key.toString('hex')}
    `)
	})
}

module.exports = init
