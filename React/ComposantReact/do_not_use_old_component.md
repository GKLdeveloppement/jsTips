# Stop using the old way of creating React components

## Table of contents

1. The old way
2. The actual way (JSX)
3. The limit

---

So, let's start to explain why you need to delete the utilisation of the old way to create React Component.

## 1 - The old way

So, the old way to create a component is like that :

```js
const Hello = () => {
  return React.createElement("h2", {}, "Hello world");
};

export default Hello;
```

I mean this is not the most difficult thing you see in JS and React, so what is the problem here ?

---

## 2 - The actual way (JSX)

Here we just use the JSX syntax to do the same thing :

```js
const Hello = () => {
  return <h2>Hello World</h2>;
};

export default Hello;
```

Ok, well this is not a revolution when we look firstly.

But ... !

---

## 3 - The limit

When I need to do something like add a div that encapsulates my component, with the current method :

```js
const Hello = () => {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
};

export default Hello;
```

It's look very easy and logical thing, don't need to break your head to understand what we do.
So ...
With the old method ? Check this :

```js
const Hello = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Hello world")
  );
};

export default Hello;
```

IMO, There's no need to explain the limitations of using the old method after this.

Anyway, I can't be expected to maintain harder code than a Hello World component written as :poop:.

---

Practice makes progress ! :muscle:

[~SemihGKL](https://dev.to/semihgkl)
