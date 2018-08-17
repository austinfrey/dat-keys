const path = require('path')
const hyperdb = require('hyperdb')
const swarm = require('hyperdiscovery')
const pump = require('pump')
const {isValidKey, homeDir} = require('./helpers')

const keysDir = path.join(homeDir(), '.keys')

function share(key) {
	if (isValidKey(key) === false) {
		return console.error(
			new Error('Not a valid key').message
		)
	}

  const db = hyperdb(keysDir, key)

	db.ready(() => {
		const sw = swarm(db)
		console.log(db.key.toString('hex'))

    sw.on('connection', (peer) => {
      pump(peer, db.replicate({live: true}), peer)
    })
	})
}

module.exports = share

