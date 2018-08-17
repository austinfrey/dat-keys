#! /usr/bin/env node

const cli = require('commander')
const {init, add, ls, rm} = require('./cmds')

cli.version(
	require('./package.json').version
)

cli.command('init <key>').action(init)

cli.command('add <key> <dat-key>').action(add)

cli.command('ls <key>').action(ls)

cli.command('rm <key>').action(rm)

cli.parse(process.argv)
