const fs = require("fs")
const page  = require("./pages")
const inquirer = require("inquirer");
const folderFunc = require("./jsfiles");
const folders = require("../levelConfig.json")
 
async function initializeFolder(input){

    let level = await selectProjectSize();
    folders[level].forEach(element => {
        folderFunc.createInitFolder(element);
    });

    let router = await routerNeeded();

    router ? page.routingInit() : "";

    page.createPage("Home");

    
    // if(level=="small"){
    //     for( i in folders.small){
    //         folderFunc.createFolder(i);
    //     }
    // }else if(level == "medium"){
    //     for(i in folders.medium){
    //         folderFunc.createFolder(i);
    //     }
    // }


}

async function selectProjectSize(){
    const size = await inquirer.prompt({
        name : "projectLevel",
        type : "list",
        message : "Select the level of your project",
        choices : [
            "small",
            "medium",
            "large"
        ]
    }).then(answers =>{
        return answers;
    }
    )

    return size.projectLevel;
}

async function routerNeeded(){
    const ans = await inquirer.prompt({
        name : "router",
        type : "list",
        message : "Do you want to add routing?",
        choices : [
            "Yes",
            "No"
        ]
    }).then(answers =>{
        return answers;
    }
    )

    return ans.router == "Yes";
}

async function selectBuildTool(){

    const option = await inquirer.prompt({
        name : "buildTool",
        type : "list",
        message : "select yout built tool",
        choices : [
            "Vitejs",
            "Rubyjs",
            "Create React App"
        ]
    })
    .then(
        answers =>{
            return answers;
        }
    )

    return option.buildTool;

}
module.exports = {initializeFolder}
