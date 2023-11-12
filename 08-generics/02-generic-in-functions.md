# Generics in functions

## The Problem

In the code below, everything works fine until we try to access `mergedObj.name` because TS does not know if those properties exist as all it knows is that `a` and `b` are of type `object`.

`NOTE: Object.assign copies all properties from one or more source objects to a target object. It returns the modified target object`

```ts
const merge = (a: object, b: object): object => {
  return Object.assign(a, b);
};

const mergedObj = merge({ name: "Max" }, { age: 30 });

console.log(mergedObj.name); // errors
console.log(mergedObj.age); // errors
```

## The Solution

`Generics` transform the merge function into a versatile tool, capable of accepting arguments (`objA` and `objB`) of any types, denoted as `T` and `U`.

This design liberates the function from the constraints of specific type objects, allowing operation with diverse types as needed.

Upon invocation with `merge({ name: "Max" }, { age: 30 })`, TypeScript deduces the types for `T` and `U` from the arguments provided. The inference process acknowledges that `objA` possesses a `name` property and `objB`, an `age` property.

Consequently, the resultant merged object, `mergedObj`, maintains the type attributes of both inputs, permitting property access such as `mergedObj.name` and `mergedObj.age` without triggering TypeScript errors.

```ts
const merge = <T, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Max" }, { age: 30 });

// no errors
console.log(mergedObj.name);
console.log(mergedObj.age);
```

This methodology elevates the merge function's utility, equipping it to handle a range of data structures while conserving their type characteristics, thus significantly boosting code reusability and ensuring type safety.

The following would still work without the need to re-write the function.

```ts
const merge = <T, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Max", hobbies: ["coding"] }, { age: 30, children: false });

// no errors
console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.age);
```

## A better approach with constraints

`Constraints` with the `extends` keyword in generics takes the flexibility and robustness of the merge function a step further.

By defining the function types with `extends object`, a crucial refinement is added: both `T` and `U` are required to be `objects`, whether simple or complex in structure.

This method prevents non-object types from being passed to the function, preventing potential misuse or errors that might arise from incompatible type operations.

```ts
const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Max", hobbies: ["coding"] }, { age: 30, children: false });

console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.age);
console.log(mergedObj.children);
```
