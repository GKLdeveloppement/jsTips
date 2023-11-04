# Destructuring props

## Table of contents

1. The classic method to call props in React
2. How use the destructuring

---

## 1 - The classic method to call props in React

When you learn React library, to use the props you generally saw that method :

```js
const Book = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <h4> {props.author}</h4>
    </article>
  );
};
```

It's easy to read at the moment, but it gonna be harder when we have multiple component and a lot of properties in the props.

---

## 2 - How use the destructuring

So with the destructuring method you can have something more readable by a simple line of code :

```js
const Book = (props) => {
  const { title, author } = props;

  return (
    <article>
      <h1>{title}</h1>
      <h4> {author}</h4>
    </article>
  );
};
```

---

Practice makes progress ! :muscle:

[~SemihGKL](https://dev.to/semihgkl)
