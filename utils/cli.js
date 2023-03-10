const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `clr`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	json : {
		type:'boolean',
		default : false,
		desc : "Create a json data file"
	},
	feature : {
		type : "string",
		default : "/0",
		desc : "Create item in a features folder mentioned after the flag",
		alias : `f`
	},
	page : {
		type : "string",
		default : "/0",
		desc : "Create item in a page folder metioned after the flag",
		alias : `p`
	},
	layout : {
		type : "string",
		default : "/0",
		desc : "Create item in a layout metioned after the flag",
		alias : "l"

	},
	component : {
		type : "string",
		default : "/0",
		desc : "Create item in the component metioned after the flag",
		alias : "c"
	}
};
const commands = {
	help: { desc: `Print help info, please refer the github docs` },
	crt : {desc : "Create an item"},
	del : {desc : "Delete an item"},
	rename : {desc : "Rename an item"}
};

const helpText = meowHelp({
	name: `rct`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options)
