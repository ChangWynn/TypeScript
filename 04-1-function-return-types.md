# Function Return Types

Syntax:

```ts
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};
```

## Contents

- [void](#void)
- [never](#never)

## void

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

## never

when a function never returns.

In the example, below, this function is garanteed to crash, therefore will never return.

```typescript
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};
```

An infinite loop would also never return.

In both scenario, TS will infered a type `void` by default, but it is good practice to explicitly assign the type to `never`
