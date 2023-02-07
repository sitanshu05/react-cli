const fs = require("fs");
const { flags } = require("../utils/cli");
const cli = require("../utils/cli")
const pathManager = require("../functions/pathManager");

let path = pathManager.getPath();

const createJS = (folder, name, value) => {

     path = `${path}/${folder}/${name}.js`

    if (fs.existsSync(path)) {
        console.log("File Already exsits");
    }
    else {
        fs.writeFileSync(path, value);
    }
}

const deleteJS = (folder, name) => {

    const path = `${path}/${folder}/${name}.js`

    if (!fs.existsSync(path)) {

        deleteJSON(folder, name)
    }
    else {
        fs.unlinkSync(path);
    }

}

const renameJS = (folder, newName, oldName) => {

    let path = `${path}/${folder}/${oldName}.js`

    let body = fs.readFileSync(path).toString();

    body = body.replace(oldName, newName)

    deleteJS(folder, oldName);
    createJS(folder, newName, body);
}

const createJSON = (folder, name, value) => {

    const path = `${path}/${folder}/${name}.json`

    if (fs.existsSync(path)) {
        console.log("File Already exsits");
    }
    else {
        fs.writeFileSync(path, value);
    }
}

const deleteJSON = (folder, name) => {

    const path = `${path}/${folder}/${name}.json`

    if (!fs.existsSync(path)) {
        console.log("File does not exsit");
    }
    else {
        fs.unlinkSync(path);
    }

}

const renameJSON = (folder, newName, oldName) => {

    let path = `${path}/${folder}/${oldName}.json`

    let body = fs.readFileSync(path).toString();

    body = body.replace(oldName, newName)

    deleteJSON(folder, oldName);
    createJSON(folder, newName, body);
}

const createHookFile = (name, folder = 'hooks') => {

    if (!fs.existsSync('./src/hooks')) {
        fs.mkdirSync("./src/hooks");
    }

    let truename = name.toLowerCase()

    truename = truename[0].toUpperCase() + truename.slice(1);

    createJS(folder, "use" + truename,
        `export default function use${truename}(){

}`);
}

const deleteHookFile = (name, folder = 'hooks') => {

    let truename = name.toLowerCase()
    truename = "use" + truename[0].toUpperCase() + truename.slice(1);

    deleteJS(folder, truename)
}

const renameHookFile = (oldName, newName, folder = 'hooks') => {

    let newTruename = newName.toLowerCase()
    let oldTruename = oldName.toLowerCase()
    newTruename = "use" + newTruename[0].toUpperCase() + newTruename.slice(1);
    oldTruename = "use" + oldTruename[0].toUpperCase() + oldTruename.slice(1);

    renameJS(folder, newTruename, oldTruename)




}

const createUtilsFile = (name, folder = 'utils') => {

    if (!fs.existsSync('./src/utils')) {
        fs.mkdirSync("./src/utils");
    }


    createJS(folder, name,
        `export default function ${name}(){
            
        }`);
}

const deleteUtilsFile = (name, folder = 'utils') => {

    deleteJS(folder, name)
}

const renameUtilsFile = (oldname, newname, folder = 'utils') => {

    renameJS(folder, newname, oldname)


}
const createDataFile = (name, folder = 'data') => {

    if (!fs.existsSync('./src/data')) {
        fs.mkdirSync("./src/data");
    }

    console.log(cli.flags.json)
    if (cli.flags.json) {
        createJSON(folder, name, `{
}`);
    }

    else {
        createJS(folder, name,
            `export const ${name} = {
                
}`);

    }
}

const deleteDataFile = (name, folder = 'data') => {


    deleteJS(folder, name)
}

const renameDataFile = (oldname, newname, folder = 'data') => {

    renameJS(folder, newname, oldname)


}

const createFolder = (name) => {
        fs.mkdirSync(name);
}

const createFeature = (val) =>{

    let name= val.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);

    fs.mkdirSync(`./src/features/${name}`);
    createJS(`features/${name}`,name,"export");

    console.log(flags);
}

function deleteFeature(val){
    
    let name = val.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);

    const paths = require("path")
    path = `${path}/features`

    const deleteFolderRecursive = (folder) => {
        if (fs.existsSync(folder)) {
            fs.readdirSync(folder).forEach((file) => {
                const curPath = paths.join(folder, file);
                if (fs.lstatSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(folder);
        }
    };

    deleteFolderRecursive(`${path}/${name}`);

}


module.exports = { createHookFile, deleteHookFile, renameHookFile, createUtilsFile, deleteUtilsFile, renameUtilsFile, createDataFile, deleteDataFile, renameDataFile, createFolder, createFeature,deleteFeature}