const cli = require("../utils/cli")
const flags = cli.flags;

function getPath(){
    if(flags.feature != "/0"){
        return `${process.cwd()}/src/features/${flags.feature}`;
    }else{
        console.log(process.cwd())
        return `${process.cwd()}/src`;
    }}


module.exports = {getPath}