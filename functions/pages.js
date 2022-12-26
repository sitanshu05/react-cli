let fs = require("fs");


const createPage = (val) => {

    let name = val.toLowerCase();
    name = name[0].toUpperCase() + name.slice(1);

    if (fs.existsSync(`${process.cwd()}/src/pages/${name}`)) {
        console.log("The page exsists");
    }
    else {

        fs.mkdirSync(`${process.cwd()}/src/pages/${name}`);
        fs.writeFileSync(`${process.cwd()}/src/pages/${name}/${name}.jsx`,
            `import React from 'react'
import './${name}.css'

function ${name}() {
    return (
        <div>${name}</div>
    )
}

export default ${name}`);
        fs.writeFileSync(`${process.cwd()}/src/pages/${name}/${name}.css`, "");

        if (fs.existsSync(`${process.cwd()}/src/routes`)) {

            addToRouterConfig(name)
            addToRouter()

        }

    }
}

const deletePage = (name) => {

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

    let page = name.toLowerCase();
    page = page[0].toUpperCase() + page.slice(1);
    const path = require("path")
    // const rimraf = require("rimraf");




    deleteFolderRecursive(`${process.cwd()}/src/pages/${page}`);
    console.log(page)
    // rimraf.sync(`./src/pages/${page}`);

    let routerConfig = fs.readFileSync(`${process.cwd()}/src/routes/RouterConfig.json`);
    routerConfig = JSON.parse(routerConfig.toString());

    delete routerConfig[page]

    fs.writeFileSync(`${process.cwd()}/src/routes/RouterConfig.json`, JSON.stringify(routerConfig));
    addToRouter();
}

const routingInit = () => {

    try {
        require.resolve("react-router");
    }
    catch {
        const { execSync } = require('child_process');

        const output = execSync('npm i react-router').toString();
        console.log(output);
    }

    fs.mkdirSync(`${process.cwd()}/src/routes`);
    
    let pagesJson = {}
    if (fs.existsSync(`${process.cwd()}/src/pages`)) {
        const pages = fs.readdirSync(`${process.cwd()}/src/pages`)


        for (let i = 0; i < pages.length; i++) {

            pagesJson = {
                ...pagesJson,
                [pages[i]]: "/" + pages[i].toLowerCase()
            }
        }
    }




    fs.writeFileSync(`${process.cwd()}/src/routes/RouterConfig.json`,JSON.stringify(pagesJson));

    addToRouter();



}

const addToRouter = () => {
    let routerConfig = fs.readFileSync(`${process.cwd()}/src/routes/RouterConfig.json`);
    routerConfig = JSON.parse(routerConfig.toString());

    const pages = Object.keys(routerConfig);
    console.log(pages)

    const imports = pages.map((page) => {

        return `import ${page} from "../${page}/${page}"`
    });

    const routes = pages.map((page) => {
        return `<Route exact path={ROUTES.${page}} element={<RouteWithRole Element={${page}} />}></Route>`
    });

    const page = `import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './RouterConfig';
${imports.join('\n')}
    
    const Router = () => {
    
        const RouteWithRole = ({ Element }) => {
            return (
                <>
                    <Element/>
                </>
            );
        }
    
        return (
            <div>
                <Routes>
                ${routes.join('\n\t\t\t\t\t')}
                </Routes>
            </div>
        )
    }`

    fs.writeFileSync(`${process.cwd()}/src/routes/Router.js`, page);

}

const addToRouterConfig = (name) => {
    let routerConfig = fs.readFileSync(`${process.cwd()}/src/routes/RouterConfig.json`);
    routerConfig = JSON.parse(routerConfig.toString());

    routerConfig = {
        ...routerConfig,
        [name]: "/" + name.toLowerCase()
    }

    fs.writeFileSync(`${process.cwd()}/src/routes/RouterConfig.json`, JSON.stringify(routerConfig))

}

module.exports = { createPage, deletePage, routingInit, addToRouterConfig, addToRouter }