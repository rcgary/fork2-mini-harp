#!/usr/bin/env node

var creatMiniHarp = require('../index');
var argv = require('minimist')(process.argv.slice(2));
var root = argv._[0] || process.cwd();
var port = argv.port || 4000;
console.log("Starting mini-harp on http://localhost:" + port);
creatMiniHarp(root).listen(port);
