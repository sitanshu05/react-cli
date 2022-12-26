const fs = require("fs")

const createComponent = (val) => {

    let name = val.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);

    if (fs.existsSync(`./src/components/${name}`)) {
        console.log("The component already exsits");
    }
    else {
        fs.mkdirSync(`./src/components/${name}`);
        fs.writeFileSync(`./src/components/${name}/${name}.jsx`,
            `import React from 'react'
import './${name}.css'
    
function ${name}(props) {
    return (
        <div>${name}</div>
    )
}

export default ${name}`);
        fs.writeFileSync(`./src/components/${name}/${name}.css`, "");

    }
}

const deleteComponent = (val) => {

    let name = val.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);
    
    const path = require("path")

    const deleteFolderRecursive = (folder) => {
        if (fs.existsSync(folder)) {
            fs.readdirSync(folder).forEach((file) => {
                const curPath = path.join(folder, file);
                if (fs.lstatSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(folder);
        }
    };

    deleteFolderRecursive(`./src/components/${name}`);

}

module.exports = {createComponent,deleteComponent}