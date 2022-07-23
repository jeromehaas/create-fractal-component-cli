#!/usr/bin/env node

'use strict';

const fs = require('fs');
const createJsFile = require('./lib/create-js-file');
const createConfigFile = require('./lib/create-config-file');
const createScssFile = require('./lib/create-scss-file');
const createHbsFile = require('./lib/create-hbs-file');

const main = async () => {
	try {
		const [_node, _operation, name] = process.argv;
		if (fs.existsSync(`${ __dirname }/${ name }`)) throw new Error(`directory ${ name } already exists!`);
		fs.mkdirSync(`${ __dirname }/${ name }`);
		createHbsFile(name);
		createJsFile(name);
		createScssFile(name);
		createConfigFile(name);
	} catch (error) {
		console.log(`ERROR: ${ error }`);
	};
};

main();

