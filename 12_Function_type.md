# Function type

basic 
```typescript
const fn = Function
```

this works but it's not perfect. In the example below, TS will not raise errors. combinedValues is indeed a function but the code will not work because this is not the right function.

```typescript
const add = (n1: number, n2: number):number => {
  return n1 + n2
}
const printResult = (num: number):void => {
  console.log('Result: ' + num)
}

let combinedValues = Function;
combinedValues = add
combinedValues = printResult

combinedValues(5, 5)
```

Here is a better way to define a `Function` type

```typescript
let fn: () => number;
```

this function takes no parameter and will return a number

example
```typescript
const add = (n1: number, n2: number):number => {
  return n1 + n2
}
const printResult = (num: number):void => {
  console.log('Result: ' + num)
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add
combinedValues = printResult // compile error

combinedValues(5, 5)
```

type for callback functions is the same as function

```typescript
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2
  cb(result)
}

addAndHandle(5, 5, (result) => {
  console.log(result)
})
```