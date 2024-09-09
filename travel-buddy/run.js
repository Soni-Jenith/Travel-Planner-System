const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


const modules_need_for_this_file = [
    'express',
    'cors',
    'xlsx',
    'react',
    'chalk@4',
    'mongoose',
    'nodemailer',
    'jwt-decode',
    'jsonwebtoken',
    'react-type-animation',
    'react-router-dom',
    'concurrently --save-dev',
    '--save-dev @babel/plugin-proposal-private-property-in-object'
];

function install_modules(modules_array){
    try {
        modules_array.forEach((module,index) => {
            console.log(`\n\n${index + 1} ${module}........\n`);
            execSync(`npm install ${module}`, { stdio: 'inherit' });
            execSync(`cls`, { stdio: 'inherit' });
        });
    } catch (error) {
        console.log('Error', error);
    }
};


console.log('\n\n\n\tstart install  modules ... \n\n\n');
install_modules(modules_need_for_this_file);


// fix-part
execSync(`cls`, { stdio: 'inherit' });
console.log("\n\n\t @shrey11_  \n\n")

// const path_1 = "./Data_file/_fix_react_error/fix_to_set_webpackDevServer.js"
const path_1 = "./fix_to_set_webpackDevServer.js";

try{
    execSync(`node ${path_1}`, { stdio: 'inherit' });
    console.log("\n 1. All modules installed successfully\n");
    console.log(" 2. fix -- (BUG that will show on start React-app)....\n\n");

}catch(e){
    console.log("\n last task not work  \n");
    throw new Error(e)
}

rl.question('Any key to run code.....', (answer) => {
    execSync(`cls`, { stdio: 'inherit' });
    console.log("@shrey11_ say 'npm start'\n");
    execSync(`npm start`, { stdio: 'inherit' });
    rl.close();
  });





//  other thing that chage --- 

// // some time need to add
// npm install --save-dev @babel/plugin-proposal-private-property-in-object

