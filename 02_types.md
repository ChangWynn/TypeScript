# Types

## Core Types
- `number`: All numbers, no differenciation between integers or floats
- `string`: All text values, all quotes
- `boolean`; true of false only (no truthy or falsy)

```typescript
const add = (n1: number, n2: number) => {
  return n1 + n2
}

const number1 = 5
const number2 = 2.8

const result = add(number1, number2)
console.log(result)
```