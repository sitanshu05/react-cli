const fs = require("fs")
const page  = require("./pages")

const initializeFolder = () => {


    if (fs.existsSync(`${process.cwd()}/src/components`)) {
        console.log("components folder already exsists")
    }
    else {
        console.log(`${process.cwd()}/src/components`)
        fs.mkdirSync(`${process.cwd()}/src/components`);
    }
    if (fs.existsSync(`${process.cwd()}/src/pages`)) {
        console.log("pages folder already exsists")
    }
    else {
        fs.mkdirSync(`${process.cwd()}/src/pages`);
        page.createPage("Home");
    }
}

module.exports = {initializeFolder}
