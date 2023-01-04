//get all the arguments in the terminal command in an array
const args = process.argv

//the first element of the array is the file name
const fileName = ["terminalJS.js"]//[args[0]]

// //the seconde one is the argument that you passed
// const arg1 = args[1]

// //demonstration
// console.log("In the file : "+ fileName + + "with this arg : " + arg1 + ", you have this content : " + arg1);

const spawn = require('child_process').spawnSync;

function getReturnExec(fileName) {
    console.log(spawn('node', fileName).stdout.toString());
    return 
}

getReturnExec(["terminalJS.js"])