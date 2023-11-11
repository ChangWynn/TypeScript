# Tuple Type

A tuple is ordered fixed-lenght array.

```
[number, string]
```

```
[1,2]
```

```ts
const person = {
  name: "Chang",
  age: 35,
  hobbies: ["sports", "cooking"],
  role: [2, "author"], // (number | string)[]
};
```

In the example above, `role` is of type `(number | string)[]` but it can be of any length and each element can either be a string or a number.

If we strictly want `role` to be an array of one integer then one string, the tuple type is the appropriate one.

```ts
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

Although, we specified the length of the tuples to 2 elements, typescript will allow the `push` method.

```ts
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
