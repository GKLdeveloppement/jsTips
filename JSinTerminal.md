# Execute Javascript in the terminal

## Table of contents

1. Create a file
2. Execute the file
3. Get the return of a JS file execution
4. Get the parameters of the terminal in a JS file

## 1 - Create a file

You can create your file throught the IDE that you use or you can type this command in the terminal :

```js
touch terminalJS.js
```

Then, do a basic Javacript code :

```js
const gg = "good job dude."
console.log(gg)
```

## 2 - Execute the file

To execute that code in your terminal, just write this in the terminal :

```js
node terminalJS.js
```

you are going to see :

```js
good job dude.
```

## 3 - Get the return of a JS file execution in an other script

To get the return value of the "terminalJS.js" file in an another file :

- Create a new file :

```js
touch ggDude.js
```

- In this file, add the following to get the contents:

```js
//The child_process.spawn() method spawns a new process using the given command, with command-line arguments in args, but the spawnAsync function will not return until the child process has fully closed.
const spawn = require('child_process').spawnSync;

//Here we create a function that takes in args an array, here we passed just the filename and no more because terminalJS.js file don't need argument for its execution
function getReturnExec(fileName) {
    //Here we call the spawn method that execute our node command and we log the result
    console.log(spawn('node', fileName).stdout.toString());
    return 
}

//Here we just execute the above function with the filename contained in an array by reason of the spawnSync function need in second argument the arguments of our command that we need to execute
getReturnExec(["terminalJS.js"])
```

- Write in the terminal the command line to run "ggDude.js"

```js
node ggDude.js
```

The result :

```js
good job dude.
```

Therefore, the new file that we created get the result of terminalJS.js and return it.

## 4 - Get the parameters of the terminal in a JS file

To get the parameters of the terminal in a JS file, as we can see in the above part, we just passed the filename without variable when we call the function.
Essentially, to make it more flexible and adaptable we need to make it variable so we can choose which file we need to target.

Modify the "ggDude.js" file like that :

```js
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

//----------------------------------------------------//

const spawn = require('child_process').spawnSync;

const fileName = arg3

function getReturnExec(fileName) {
    console.log("Here the content of the file that we target : " + fileName);
    console.log(spawn('node', fileName).stdout.toString());
    return 
}

getReturnExec([fileName])
```

Above, we execute the file "ggDude.js" and pass the name of the file "terminalJS.js", which is the file that we need to target and get the contents from.

NB : To see the result I let you test that yourself.

To conclude, if we need to change the file  we want to get the contents from, we can just change our terminal command and target an other file.

Practice makes progress ! :muscle:
  
~SemihGKl
