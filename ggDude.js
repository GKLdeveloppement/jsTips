//get all the arguments in the terminal command in an array
const args = process.argv

//The first one is the 'node' command to execute JS script.
const arg1 = args[0];

//the second one is the path of the file what we need to execute
const arg2 = args[1];

//the third one is an additionnal argument, here the filename that we target, to get its content
const arg3 = args[2];


//demonstration
console.log("We execute the file : " + arg2)
console.log("We have to passed this file : " + arg3 + " as an argument.");

//------------------------//

const spawn = require('child_process').spawnSync;

const fileName = arg3

function getReturnExec(fileName) {
    console.log("Here the content of the file that we target : " + fileName);
    console.log(spawn('node', fileName).stdout.toString());
    return 
}

getReturnExec([fileName])