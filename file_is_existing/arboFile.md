# How to test the existence of a file in Javascript

## Table of contents

1. Create a file
2. The file testing function
3. Execute code
4. Tips

-------------------

## 1 - Create a file

First, we need to create another file that contains our test function.
You can create this file using the IDE of your choice or by typing the following command in the terminal :

```js
touch testFile.js
```

-------------------

## 2 - The file testing function

In the previous file, add this function that takes an array as an argument. For each file name in the array, we will test its existence.

```js
function isNotFile(args) {
    for (let i = 0; i < args.length; i++) {
        if (fs.existsSync(args[i]) == true) {
            console.log(args[i] + "this file exist")
        } else {
            console.log(args[i] + "this file doesn't exist")
        }
    }
    return true
}
```

Now, we need to call the function with the correct parameter (**don't forget the array**):

```js
isNotFile(['test.txt'])
```

-------------------

## 3 - Execute code

Now, all you need to do is create the 'test.txt' file. To do this, run the following command in the terminal:

```js
touch test.js
```

And now, simply execute our function in the terminal:

```js
node testFile.js
```

If you have successfully created the 'test.txt' file, you should receive a message indicating that the file exists in the terminal.

-------------------

## 4 - Tips

The best way to utilize this code is to check out my topic, ["Javascript in the Terminal"](https://dev.to/semihgkl/javascript-in-the-terminal-514k). There, you will learn and see how to retrieve the arguments passed in the terminal command, such as:

```js
node testFile.js test.js test2.js
```

Practice makes progress ! :muscle:
  
[~SemihGKl](https://dev.to/semihgkl)
