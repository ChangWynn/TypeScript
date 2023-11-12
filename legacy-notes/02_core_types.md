# Types

## Core Types
- `number`: All numbers, no differenciation between integers or floats
- `string`: All text values, all quotes
- `boolean`; true of false only (no truthy or falsy)

### Type Inference
Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable or expression based on its usage and context. This means that you don't always have to explicitly specify the types of variables in TypeScript, as the compiler can often infer them for you.


### Type assignment

```typescript
let number1: number = 5
```
With Type Inference, there is generally no need to assign types to variables or return values.
It is actually bad practice to do so.

The only time where it CAN be done is when declared as undefined.
```typescript
const add = (n1: number, n2: number, result: boolean, text: string) => {
  const total = n1 + n2

  if (result) { console.log(text + total) }
  else { return total }
}

let number1: number
number1 = '5' // compilation error
number1 = 5
const number2 = 2.8
const printResult = true
const resultText = 'Result is: '

add(number1, number2, printResult, resultText)
```
