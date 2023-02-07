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
	create : {
		type: `boolean`,
		alias : `c`,
		desc : "Create a component or a page"
	},
	json : {
		type:'boolean',
		default : false,
		desc : "Create a json data file"
	},
	feature : {
		type : "string",
		default : "/0",
		desc : "Create item in a features folder",
		alias : `f`
	},
	page : {
		type : "string",
		default : "/0",
		desc : "Create item in a particular page folder",
		alias : `p`
	}
};

const commands = {
	help: { desc: `Print help info` }
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
