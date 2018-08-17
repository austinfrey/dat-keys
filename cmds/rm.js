const path = require('path')
const hyperdb = require('hyperdb')
const {homeDir} = require('./helpers')

const keysDir = path.join(homeDir(), '.keys')
const db = hyperdb(keysDir)

function rm (key) {
  db.ready(function () {
    db.del(key, function (err) {
      if (err) {
        throw err
      }
    })
  })
}

module.exports = rm
