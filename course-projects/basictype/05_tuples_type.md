# Tuple Type

Fixed-lenght array

```
[number, string]
```

```
[1,2]
```

```typescript
const person = {
  name: "Chang",
  age: 35,
  hobbies: ["sports", "cooking"],
  role: [2, "author"], // (number | string)[]
};
```

currently, `role` is a `(number | string)[]` but it can be modified to be longer or shorter and the elements can be changed for other types.
if we strictly want `role` to be an array of one integer and one string, we would need to usee a tuple type to specify it.

```typescript
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Chang",
  age: 35,
  hobbies: ["sports", "cooking"],
  role: [2, "author"], // (number | string)[]
};
```

although, we specified the length of the tuples to 2 elements, typescript will allow the `push` method.

```typescript
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Chang",
  age: 35,
  hobbies: ["sports", "cooking"],
  role: [2, "author"], // (number | string)[]
};

person.role.push("admin");

console.log(person.role); // [2, 'author', 'admin']
console.log(person.role[2]);
// Tuple type '[number, string]' of length '2' has no element at index '2'
```
