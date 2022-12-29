# So what is **NaN** ??

**_spoil : It's a Number_**

## Table of contents

1. NaN beginners introduction
2. My tips to verify number
3. My second tips to verify the opposite

## 1 - What we need to know about that ? Basically... 3 things for beginners

> 1 - NaN is the result of the an arithmetic operation what was invalid.
> 2 - For many of us NaN == Not A Number, but for sure, it have an _'number'_ type.
> 3 - We can not compare NaN to itself.

To illustrate all these things I'm gonna to show you some examples :

* #1

```js
    const whatIsNaN = 1 / "a"
    console.log("#1 - You can have "NaN" like that : 1 / a = " + whatIsNaN);
```

* #2

```js
    console.log("#2 - The type of NaN is : "+typeof NaN);
```

* #3

```js
    if (NaN === NaN) {
        console.log("We never catched this log");
    } else {
        console.log("But always this log");
    }
    
    //If you need to catch a NaN, you can use that : 

    if (Number.isNaN(NaN)) {
        console.log("I'm a NaN !");
    }
```

-------------------

## 2 - My tips

 With the experience, I mean not the better way to verify a variable is a "number" or not, but I'm more comfortable with that

```js
//The regex to match with numbers.
const nbRegex = /^-?[0-9]\d*(\.\d+)?$/

/*
Here you can see how many elements in your array 
do not match with the regex what we definded.

Here "args" is an array
 */
function isNotNumber(args) {
  return args.filter(arg => !arg.match(nbRegex)).length;
}
```

So, with this function if the return is more than 0 ?
It's the proof that the array you passed as arguments contains some stuff that is not a number :

```js
//Here "args" is an array
if (isNotNumber(args) > 0) {
    console.log("This array does not contain number only.");
    return
}
```

-------------------

## 3 -  My second tips to verify the opposite

In an other way you can just delete the "!" in the filter function to have the perfect oposite and only stuff who is not numbers :

```js
//Here "args" is an array
function isNotNumber(args) {
  return args.filter(arg => arg.match(nbRegex)).length;
}
```

To tested that :

```js
//Here "args" is an array
if (isNotNumber(args) > 0) {
    console.log("This array does contain some number.");
    return
}
```
