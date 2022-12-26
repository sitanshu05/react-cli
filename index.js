#!/usr/bin/env node

/**
 * react-cli
 * A command line interface to manage your react projects
 *
 * @author Sitanshu <https://github.com/sitanshu05>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const component = require('./functions/components')
const pages = require('./functions/pages')
const initialize = require('./functions/initialize')
const fs = require("fs");


const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	// init({ clear });

	try {
		const packageJson = JSON.parse(fs.readFileSync(`${process.cwd}/package.json`));

		if (packageJson.dependencies && packageJson.dependencies.react) {
			console.log('React project detected');
		}
		else{
			console.log("Current working directory is not a react project")
		}
	}
	catch (error) {
		console.log("Current working directory is not a react project")

	}


	input.includes(`help`) && cli.showHelp(0);

	if (input[0] == 'init') {
		initialize.initializeFolder();
	}
	else if (input[0] == 'create' || input[0] == 'crt') {
		if (input[1] == 'component' || input[1] == 'c') {
			component.createComponent(input[2]);
		}
		else if (input[1] == 'page' || input[1] == 'p') {
			pages.createPage(input[2]);
		}
	}
	else if (input[0] == 'delete' || input[0] == 'del') {
		if (input[1] == 'component' || input[1] == 'c') {
			component.deleteComponent(input[2]);
		}
		else if (input[1] == 'page' || input[1] == 'p') {
			pages.deletePage(input[2]);
		}
	}
	else if (input[0] == 'router') {
		if (input[1] == 'init') {
			pages.routingInit();
		}
	}


	debug && log(flags);

})();
