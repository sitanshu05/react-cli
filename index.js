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
const jsfiles = require('./functions/jsfiles')
const fs = require("fs");


const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

async function parser() {
	// init({ clear });

	// try {
	// 	const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`));

	// 	if (packageJson.dependencies && packageJson.dependencies.react) {
	// 		// console.log('React project detected');
	// 	}
	// 	else{
	// 		console.log("Current working directory is not a react project")
	// 	}
	// }
	// catch (error) {
	// 	console.log("Current working directory is not a react project")
	// 	return 

	// }

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
		else if(input[1] == 'hook' || input[1] == "h"){
			jsfiles.createHookFile(input[2]);
		}
		else if(input[1] == 'utils' || input[1] == "utl"){
			jsfiles.createUtilsFile(input[2]);
		}
		else if(input[1] == 'data' || input[1] == "d"){
			jsfiles.createDataFile(input[2]);
		}
		else if(input[1] == "layout" || input[1] == "lyt"){
			component.createLayout(input[2]);
		}
		else if(input[1] == 'feature' || input[1] == "feat"){
			jsfiles.createFeature(input[2]);
		}
		else if(input[1]=='assets' || input[1]=='ast'){
			jsfiles.createFolder("assets");
		}
		else if(input[1]=='context' || input[1]=='ctxt'){
			jsfiles.createContext(input[2]);
		}
		else if(input[1]=='service' || input[1] == 'srvc'){
			console.log("srvc");
			jsfiles.createService(input[2]);
		}
		else if(input[1]=='lib'){
			jsfiles.createLib(input[2]);
		}
		
		
	}
	else if (input[0] == 'delete' || input[0] == 'del') {
		if (input[1] == 'component' || input[1] == 'c') {
			component.deleteComponent(input[2]);
		}
		else if (input[1] == 'page' || input[1] == 'p') {
			pages.deletePage(input[2]);
		}
		else if(input[1] == 'hook' || input[1]=='h'){
			jsfiles.deleteHookFile(input[2]);
		}
		else if (input[1] == 'data' || input[1] == 'd') {
			jsfiles.deleteDataFile(input[2]);
		}
		else if (input[1] == 'utils' || input[1] == 'utl') {
			jsfiles.deleteUtilsFile(input[2]);
		}else if(input[1]=="feature" || input[1] == 'feat'){
			jsfiles.deleteFeature(input[2]);
		}else if(input[1]=='layout' || input[1]=="lyt"){
			component.deleteLayout(input[2]);
		}else if(input[1]=='context' || input[1]=='ctxt'){
			jsfiles.deleteContext(input[2]);
		}
		else if(input[1]=='service' || input[1]=='srvc'){
			jsfiles.deleteService(input[2]);
		}
		else if(input[1]=='lib'){
			jsfiles.deleteLib(input[2]);
		}
		
	}
	else if (input[0] == 'router') {
		if (input[1] == 'init') {
			pages.routingInit();
		}
	}
	else if(input[0]=='rename'){
		if(input[1]=='page' || input[1] == 'p'){
			pages.editPage(input[2],input[3]);
		}
		else if(input[1]=='hook'){
			jsfiles.renameHookFile(input[2],input[3])
		}
		else if (input[1] == 'data' || input[1] == 'd') {
			jsfiles.renameDataFile(input[2],input[3]);
		}
		else if (input[1] == 'utils' || input[1] == 'utl') {
			jsfiles.renameUtilsFile(input[2],input[3]);
		}else if(input[1]=='context' || input[1]=='ctxt'){
			jsfiles.renameContext(input[2],input[3]);
		}
		else if(input[1]=='service' || input[1]=='srvc'){
			jsfiles.renameService(input[2],input[3]);
		}
		else if(input[1]=='lib'){
			jsfiles.renameLib(input[2],input[3]);
		}

	}
	else if (input[0] == 'test' ) {
		console.log(process.cwd())

		try {
			console.log(`${process.cwd()}/package.json`)
			const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`));

			console.log(packageJson.dependencies)

			if (packageJson.dependencies && packageJson.dependencies.react) {
				console.log('React project detected');
			}
			else {
				console.log("Current working directory is not a react project")
			}
		}
		catch (error) {

			console.log("Err => Current working directory is not a react project")
			// console.log(error)
		}
	}


	debug && log(flags);

};

parser();
