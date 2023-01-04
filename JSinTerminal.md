# Javascript in the terminal

## Table of contents

1. Create a file
2. Execute the file
3. Get the return of a JS file execution
4. Get the parameters of the terminal in a JS file

## 1 - Create a file

You can create your file throught the IDE that you use or you can make this command in the terminal :

```js
touch terminalJS.js
```

Then, let do a basic Javacript code :

```js
const gg = "good job dude."
console.log(gg)
```

## 2 - Execute the file

To execute that code in your terminal, just write this in this one :

```js
node terminalJS.js
```

you gonna see :

```js
good job dude.
```

## 3 - Get the return of a JS file execution in an other script

To get the return value of the "terminalJS.js" file in an other file :

- Create a new file :

```js
touch ggDude.js
```

- In this file, add that to get the content :

```js
//The child_process.spawn() method spawns a new process using the given command, with command-line arguments in args, but the spawnAsync function will not return until the child process has fully closed.
const spawn = require('child_process').spawnSync;

//Here we create a function that takes in args an array, here we passed just the filename and no more because terminalJS.js file don't need argument
function getReturnExec(fileName) {
    //Here we call the spawn method that execute our node command and we log the result
    console.log(spawn('node', fileName).stdout.toString());
    return 
}

//Here we just execute the above function with the filename contained in an array
getReturnExec(["terminalJS.js"])
```

## 4 - Get the parameters of the terminal in a JS file
