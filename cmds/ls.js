const path = require('path')
const hyperdb = require('hyperdb')
const {homeDir} = require('./helpers')

const keysDir = path.join(homeDir(), '.keys')
const db = hyperdb(keysDir, {valueEncoding: 'utf8'})

function ls(key) {
	db.ready(() => {
  console.log(db.key.toString('hex'))

		db.get(key, (err, nodes) => {
			if (err || nodes.length === 0) {
				return console.error(
					new Error('Key not found').message
				)
			}

			console.log(nodes[0].value)
		})
	})
}

module.exports = ls
