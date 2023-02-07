const fs = require("fs");
const { flags } = require("../utils/cli");
const cli = require("../utils/cli")
const pathManager = require("../functions/pathManager");

let path = pathManager.getPath();

const createJS = (folder, name, value) => {

    if (!fs.existsSync(`${path}/${folder}`)) {
        fs.mkdirSync(`${path}/${folder}`);
    }

     paths = `${path}/${folder}/${name}.js`

    if (fs.existsSync(paths)) {
        console.log("File Already exsits");
    }
    else {
        fs.writeFileSync(paths, value);
    }
}

const deleteJS = (folder, name) => {

    paths = `${path}/${folder}/${name}.js`

    if (!fs.existsSync(paths)) {

        deleteJSON(folder, name)
    }
    else {
        fs.unlinkSync(paths);
    }

}

const renameJS = (folder, newName, oldName) => {

    paths = `${path}/${folder}/${oldName}.js`

    let body = fs.readFileSync(paths).toString();

    body = body.replace(oldName, newName)

    deleteJS(folder, oldName);
    createJS(folder, newName, body);
}

const createJSON = (folder, name, value) => {

   paths = `${path}/${folder}/${name}.json`

    if (fs.existsSync(paths)) {
        console.log("File Already exsits");
    }
    else {
        fs.writeFileSync(paths, value);
    }
}

const deleteJSON = (folder, name) => {

    paths = `${path}/${folder}/${name}.json`

    if (!fs.existsSync(paths)) {
        console.log("File does not exsit");
    }
    else {
        fs.unlinkSync(paths);
    }

}

const renameJSON = (folder, newName, oldName) => {

    paths = `${path}/${folder}/${oldName}.json`

    let body = fs.readFileSync(paths).toString();

    body = body.replace(oldName, newName)

    deleteJSON(folder, oldName);
    createJSON(folder, newName, body);
}

const createHookFile = (name, folder = 'hooks') => {

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
function createContext(name,folder = "contexts"){
    createJS(folder,name,`export const ${name} = {
                
}`)
}

const deleteContext = (name, folder = "contexts") => {


    deleteJS(folder, name)
}

const renameContext = (oldname, newname, folder = "contexts") => {

    renameJS(folder, newname, oldname)


}

function createService(name,folder = "services"){
    createJS(folder,name,`export const ${name} = {
                
}`)
}
const deleteService = (name, folder = "services") => {
    deleteJS(folder, name)
}

const renameService = (oldname, newname, folder = "services") => {

    renameJS(folder, newname, oldname)


}

function createLib(name,folder = "lib"){
    createJS(folder,name,`export const ${name} = {
                
}`)
}
const deleteLib = (name, folder = 'lib') => {


    deleteJS(folder, name)
}

const renameLib = (oldname, newname, folder = 'lib') => {

    renameJS(folder, newname, oldname)


}

const createFeature = (val) =>{

    let name = val.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);

    fs.mkdirSync(`./src/features/${name}`);
    createJS(`features/${name}`,name,"export");

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


module.exports = { createHookFile, deleteHookFile, renameHookFile, createUtilsFile, deleteUtilsFile, renameUtilsFile, createDataFile, deleteDataFile, renameDataFile, createFolder, createFeature,deleteFeature,createContext,deleteContext,renameContext,createService,deleteService,renameService,createLib,deleteLib,renameLib}