# Special Types

## Contents

- [Literal Types](#literal-types)
- [Union Types](#union-types)
- [Custom Types/Aliases](#custom-typesaliases)

### Literal Types

This position variable can only be a string 'BUY' or 'SELL'

```ts
let position: "BUY" | "SELL";
```

### Union Types

This variable below can either be a string or a number

```ts
let variable: number | string;
```

```ts
const combine = (input1: number | string, input2: number | string) => {
  const total = input1 + input2;
  return total;
};

const combinedAges = combine(30, 26);
const cominedNames = combine("Max", "Anna");
```

### Custom Types / Aliases

```ts
type NumOrStr = number | string;

const combine = (input1: NumOrStr, input2: NumOrStr) => {
  const total = input1 + input2;
  return total;
};
```
