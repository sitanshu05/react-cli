const fs = require("fs");

const createJS = (folder,name,value) =>{

   const path = `./src/${folder}/${name}.js`

   if(fs.existsSync(path)){
    console.log("File Already exsits");
   }
   else{
    fs.writeFileSync(path,value);
   }
}

const deleteJS = (folder,name) => {

    const path = `./src/${folder}/${name}.js`

    if(!fs.existsSync(path)){
     console.log("File does not exsit");
    }
    else{
     fs.unlinkSync(path);
    }

}

const renameJS = (folder , newName,oldName) =>{

    let path = `${process.cwd()}/src/${folder}/${oldName}.js`

    let body = fs.readFileSync(path).toString();

    body = body.replace(oldName,newName)

    deleteJS(folder,oldName);
    createJS(folder,newName,body);
}

const createHookFile = (name,folder = 'hooks') =>{

    if(!fs.existsSync('./src/hooks')){
        fs.mkdirSync("./src/hooks");
    }

    let truename = name.toLowerCase()
    
    truename = truename[0].toUpperCase() + truename.slice(1);
    
    createJS(folder,"use" + truename,
`export default function use${truename}(){

}`);
}

const deleteHookFile = (name,folder = 'hooks') =>{

    let truename = name.toLowerCase()
    truename = "use" + truename[0].toUpperCase() + truename.slice(1);

    deleteJS(folder,truename)
}

const renameHookFile = (oldName,newName,folder = 'hooks') => {

    let newTruename = newName.toLowerCase()
    let oldTruename = oldName.toLowerCase()
    newTruename = "use" + newTruename[0].toUpperCase() + newTruename.slice(1);
    oldTruename = "use" + oldTruename[0].toUpperCase() + oldTruename.slice(1);

    renameJS(folder,newTruename,oldTruename)




}

module.exports = { createHookFile ,deleteHookFile,renameHookFile}