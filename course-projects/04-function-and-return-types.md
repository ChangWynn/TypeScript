# Function Return Types

```ts
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};
```

### void

`void` ignores the return type of the function.

TS differentiate a function that do not return anything and a function that return undefined.

```ts
const printResult = (num: number): void => {
  console.log("Result: " + num);
  // no return statement = void
};

const returnResult = (num: number): undefined => {
  console.log("Result: " + num);
  return; // return undefined
};

printResult(add(5, 5));
```

### Never

when a function never returns.

In the example, below, this function is garanteed to crash, therefore will never return.

```typescript
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};
```

An infinite loop would also never return.

In both scenario, TS will infered a type `void` by default, but it is good practice to explicitly assign the type to `never`

# Functions as types

### The `Function` type

```ts
const someFunction = () => {}

let variable: Function
variable = <someFunction>
```

This works but it's not perfect.

In the example below, TS will not raise errors but, although `combinedValues` being indeed a function, it will not work because it's not the right one.

```ts
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

let combinedValues = Function;
combinedValues = add;
combinedValues = printResult;

combinedValues(5, 5);
```

### The `"Callback Function"` type

A better way is to use `"Callback Functions"` as types.

```ts
let fn: () => void;
```

This function above takes no parameter and will return a number

```ts
const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

let combinedValues: (a: number, b: number) => number;
combinedValues = printResult; // compile error
combinedValues = add; // no compile error

combinedValues(5, 5);
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
