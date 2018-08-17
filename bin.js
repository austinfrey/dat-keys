const cli = require('commander')
const {add, ls, rm}= require('./cmds')

cli.version(
  require('./package.json').version
)

cli.command('add <key> <dat-key>').action(add)

cli.command('ls <key>').action(ls)

cli.command('rm <key>').action(rm)

cli.parse(process.argv)
