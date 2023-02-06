# How to test the existence of a file in Javascript

## Table of contents

1. Create a file
2. The file testing function

-------------------

## 1 - Create a file

First we have to create an other file how contain our testing fonction.
You can create your file through the IDE that you use or you can type this command in the terminal :

```js
touch testFile.js
```

-------------------

## 2 - The file testing function

In the previous file, add this function, that take an array as argument and for each arguments on your array we test the existence of it.

```js
function isNotFile(args) {
    for (let i = 0; i < args.length; i++) {
        if (fs.existsSync(args[i]) == true) {
            console.log(args[i] + "this file exist")
        } else {
            return false
        }
    }
    return true
}
```

Practice makes progress ! :muscle:
  
~SemihGKl
