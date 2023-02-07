const cli = require("../utils/cli")
const flags = cli.flags;

function getPath(folder = "/0"){

    if(flags.feature != "/0"){
        return `${process.cwd()}/src/features/${flags.feature}`;

    }else if(flags.page != "/0"){

        let name = flags.page.toLowerCase();
        name = name[0].toUpperCase() + name.slice(1);
        return `${process.cwd()}/src/pages/${name}`;

    }
    else if(flags.layout!= "/0"){

        let name = flags.page.toLowerCase();
        name = name[0].toUpperCase() + name.slice(1);

        return `${process.cwd()}/src/layout/${name}`
    }
    else if(folder == "layout"){
        return `${process.cwd()}/src/layout`
    }
    else{
        return `${process.cwd()}/src`;
    }
}


module.exports = {getPath} 