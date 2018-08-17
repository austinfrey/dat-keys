const path = require('path')
const hyperdb = require('hyperdb')
const {isValidKey} = require('./helpers.js')

const homeDir = process.env.HOME
const keysDir = path.join(homeDir, '.keys')
const db = hyperdb(keysDir, {valueEncoding: 'utf8'})

function add (key, datKey) {
  db.ready(function () {
    if (isValidKey(datKey) === false) {
      return console.error(
        new Error('Not a valid DAT key').message
      )
    }

    db.put(key, val, err => {
      if (err) {
        throw err
      }
    })
  })
}

module.exports = add
