# Functions as types

## Contents

- [The Function type](#the-function-type)
- [Callback Functions as type](#callback-functions-as-type)
- [Custom type for functions](#custom-type-for-functions)

## The `Function` type

```ts
const add = () => {};

let variable: Function;
variable = add;
```

This works but it's not perfect.

TS will check whether `variable` is a `Function` or not. It will not check the implementation.

```ts
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

let combinedValues = Function;
combinedValues = add; // takes 2 arguments
combinedValues = printResult; // takes only one argument

combinedValues(5, 5);
// no error was raised even though this function won't work.
```

## `"Callback Functions"` as type

A better way is to use `"Callback Functions"` as types.

```ts
let fn: () => void;
```

This function above will take no parameter and return a number.

```ts
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

let combinedValues: (a: number, b: number) => number;
combinedValues = printResult; // compile error
combinedValues = add; // no errors

combinedValues(5, 5); // will work
```

`"Callback Functions"` as types is the same as `Function` type.

```ts
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(5, 5, (result) => {
  console.log(result);
});
```

## Custom type for functions

```ts
type addFn = (a: number, b: number) => number;

const add: addFn = (n1, n2) => {
  return n1 + n2;
};

console.log(add("5", 5)); // compile error
console.log(add(5, 5)); // no errors. output: 10
```

This allows a cleaner and more readable function in my opinion.
