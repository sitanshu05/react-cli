const fs = require("fs")
const cli = require("../utils/cli")
const flags = cli.flags;
const paths = require('../functions/pathManager');
const path = paths.getPath() + "/components";



const createComponent = (val) => {
    
    let name = val.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);
    console.log(path);

    if (fs.existsSync(`${path}/${name}`)) {
        console.log("The component already exsits");
    }
    else {
        fs.mkdirSync(`${path}/${name}`);
        fs.writeFileSync(`${path}/${name}/${name}.jsx`,
            `import React from 'react'
import './${name}.css'
    
function ${name}(props) {
    return (
        <div>${name}</div>
    )
}

export default ${name}`);
        fs.writeFileSync(`${path}/${name}/${name}.css`, "");

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

    deleteFolderRecursive(`${path}/${name}`)

}

const editComponent = (oldVal, newVal) =>{
    
   let oldName = oldVal.toLowerCase();
   let newName = newVal.toLowerCase();

   oldName = oldName[0].toUpperCase() + oldName.slice(1);
   newName = newName[0].toUpperCase() + newName.slice(1);

   let jsx = fs.readFileSync(`${path}/${oldName}/${oldName}.jsx`).toString();
   let css = fs.readFileSync(`${path}/${oldName}/${oldName}.css`).toString();
   



   jsx = jsx.replace(`import './${oldName}.css'`, `import './${newName}.css'`)
   jsx = jsx.replace(`function ${oldName}(props)`, `function ${newName}(props)`)
   jsx = jsx.replace(`export default ${oldName}`, `export default ${newName}`)

   deleteComponent(oldName);

   createComponent(newName);

   fs.writeFileSync(`${path}/${newName}/${newName}.jsx`,jsx);
   fs.writeFileSync(`${path}/${newName}/${newName}.css`,css);
   
}

module.exports = {createComponent,deleteComponent,editComponent}