
# React CLI⚛️

[![License](https://shields.io/badge/license-MIT-orange?style=for-the-badge&logo=appveyor)](https://github.com/sitanshu05/react-cli/blob/main/LICENSE.md)

A command line interface to help you manage your react project folders and routing, (Thank you Angular). 




## Installation

Clone this repo in any folder in your local system💾

```bash
git clone https://github.com/sitanshu05/react-cli.git
```
In order to move into the folder and install the packages run

```bash
cd react-cli
npm install
```

Run the following command to check if the required permissions are granted
```bash
./index.js init
```

🚨If there is no error procced to run npm link, else run the following command to grant the required permissions
```bash
chmod 777 ./index.js
```
Run npm link to make it executable in any directory

```bash
npm link
```
You are all set to use react-cli!✨



    
## Requirments
- Node.js
- Python 3.5.0 (if you wish to contribute and run the test file, Thank you!🫂)
## Get Started

Create a new react project and open the directory in the terminal. This tool only manages the files and directories in ```src```.

### To Initialize

Run the following command
```
rct init 
```
This command will present a prompt to chose the scale of the project which will create set of folders in ```src```. The options are:

| Scale | Folder         | Alias |
|-------|----------------|-------|
| **small** | | |
|| components     | c     |
|       | pages          | p     |
| **medium**| | |
|  |components     | c     |
|       | pages          | p     |
|       | hooks          | h     |
|       | contexts       | ctxt  |
|       | utils          | utl   |
|       | assets         | ast   |
| | data | d|
| **large** |  | |
| | components     | c     |
|       | pages          | p     |
|       | hooks          | h     |
|       | contexts       | ctxt  |
|       | utils          | utl   |
|       | assets         | ast   |
| | data | d |
|       | features       | feat  |
|       | services       | srvc  |
|       | layouts        | lyt   |
|       | lib            |       |

Now select if you wish to add routing or not in the next prompt 

## Commands
The following commands are available to use with this tool in order to manage your react projects

### To Create
```bash
rct crt [folder] [name]
```
Here **[folder]** indicates the folder in which you wish to create the file and **[name]** indicates the name of the file you wish to create.


### To Delete
In order to delete an item use the following command

```bash
rct del [folder] [name]
```

### To Rename

In order to rename an item use the following command
```
rct rename [folder] [current name] [new name]
```
🔔**Note:** Not compatible with components, features, layouts and pages

### Flags 

| Flag | Command | Description | 
|----|-----------|---------------------|
| -c | ```rct crt [type] [name] -c [component]``` | Create item within a component|
| -p | ```rct crt [type] [name] -p [page]``` | Create item within a page|
| -f | ```rct crt [type] [name] -f [feature]``` | Create item within a feature|
| -l | ```rct crt [type] [name] -l [layout]``` | Create item within a layout|
| --json | ```rct crt d [name] -json``` | Creates the data file with json type |

🔔**Note:** All folders expect pages,features and layouts can be created within other folders



## Examples
### To Create a component "button"

```bash
rct crt c button
```
The button component is created in the main component folder as represented below

```
src
|__components
   |__Button
      |__Button.jsx
      |__Button.css
```

### To Create a hook "useContext" in feature "cart"

The feature cart should be created before running the following command

```bash
rct crt h context -f cart
```
🔔**Note:** The "use" prefix of hooks is added automatically and need not be metioned in the command

The hook  is created in the hook folder within the feature cart

```
src
|__features
   |__Cart
      |__Cart.js
      |__hooks
         |__useContext.js
```
## Contribute

This is still the first version of this tool and is bound have have bugs, if you notice any please raise an issue and contrbutions are always welcome!🙏

