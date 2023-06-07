# The function return type

the return type of a function can be seen when hovering over the function name. It appears after the parameters.It is automatically recognize and define by TypeScript
```typescript
const add: (n1: number, n2: number) => number
```

to explicitly define the function return type

```typescript
const add = (n1: number, n2: number):number => {
  return n1 + n2
}
```

TypeScript differentiate a function that dont return anything and a function that return undefined.
In the first case, the function return type is `void`

```typescript
const add = (n1: number, n2: number):number => {
  return n1 + n2
}

const printResult = (num: number):void => {
  console.log('Result: ' + num)
  // no return statement = void
}

const returnResult = (num: number):undefined => {
  console.log('Result: ' + num)
  return; // return undefined
}

printResult(add(5, 5))
```




