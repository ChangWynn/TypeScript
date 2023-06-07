# the union type

```typescript
const variable: number | string | boolean;
```

```typescript
const combine = (input1: number | string, input2: number | string) => {
  const total = input1 + input2
  return total
}

const combinedAges = combine(30, 26)
const cominedNames = combine('Max', 'Anna')
```