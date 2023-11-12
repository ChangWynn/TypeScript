# Basic Types

`NOTE: TS can infere Types when assigning variable so it is not necessary to explicitly define types`

## Contents

- [Number](#number)
- [String](#string)
- [Booleans](#boolean)
- [Object](#object)
- [Array](#array)
- [Tuple](#tuple)
- [Enum](#enum)

### Number

```ts
const num: number = 5;
const num: number = 5.5;
const num: number = -5;
```

### String

```ts
const greeting: string = "Hello";
const greeting: string = `Hello`;
```

### Boolean

```ts
const isTrue: boolean = true;
const isTrue: boolean = false;
```

`NOTE: does not include truthy or falsy values`

### Object

```ts
const obj: {
  name: string;
  age: number;
} = {
  name: "Max",
  age: 30,
};
```

### Array

```ts
const numbersArr: number[] = [1, 2, 3];

const stringArr: string[] = ["Max", "Mike"];
```

### Tuples

A tuple is an array with fixed length where elements are ordered.

```ts
const role: [number, string] = [1, "admin"];
```

TS will throw an error if the array doesn't follow the type and order define.

`NOTE: the push method is allowed in tuples.`

### Enum

```ts
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const staffMember = {
  name: "Max",
  age: 30,
  role: Role.ADMIN,
};
```

TS assigns each enum element to a number starting from 0 behind the scene.

To manually assign values:

```ts
enum Role {
  ADMIN = 5,
  READ_ONLY = 10,
  AUTHOR = 15,
}
```

```ts
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}
```

### Unknown

```ts
let userInput: unknown;
```

`unknown` is more restrictive than `any`

```ts
let userInput: any;
let userName: string;

userInput = "Max";
userName = userInput; // no compile error
```

```ts
let userInput: unknown;
let userName: string;

userInput = "Max";
userName = userInput; // compile error because `userName` is not garanteed to be a string
```
