# What are generics

Generics in TypeScript are a powerful feature that allows you to create reusable and flexible components that work with a variety of types, rather than a single type.

Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

They enable you to write code that can operate on objects of various types while providing compile-time type safety.

TypeScript provides several built-in generic types that are commonly used in various programming scenarios. These generics are part of the TypeScript standard library and are essential for handling collections, promises, iterators, and more.

Here's a list of some of the most frequently used built-in generic types:

- `Array<T>`: Represents an array of type T.

```ts
let numbers: Array<number> = [1, 2, 3];
```

- `Promise<T>`: Used for asynchronous operations, represents a value that may be available now, later, or never.

```ts
let promise: Promise<string> = new Promise((resolve, reject) => {
  // ...
});
```

- `ReadonlyArray<T>`: An array that cannot be modified after creation.

```ts
let immutableNumbers: ReadonlyArray<number> = [1, 2, 3];
```

- `Record<K, T>`: A type that represents an object with keys of type K and values of type T.

```ts
let user: Record<string, string> = { name: "Alice", occupation: "Developer" };
```

- `Partial<T>`: Makes all properties in T optional.

```ts
let partialUser: Partial<User> = { name: "Bob" }; // Not all properties of User are required
```

- `Required<T>`: Makes all properties in T required.

```ts
let requiredUser: Required<User> = { name: "Charlie", age: 30 };
```

- `Readonly<T>`: Makes all properties in T readonly.

```ts
let readonlyUser: Readonly<User> = { name: "Dave", age: 40 };
```

- `Pick<T, K>`: Constructs a type by picking a set of properties K from T.

```ts
let userWithOnlyName: Pick<User, "name"> = { name: "Eve" };
```

- `Omit<T, K>`: Constructs a type by picking all properties from T and then removing K.

```ts
let userWithoutAge: Omit<User, "age"> = { name: "Frank" };
```

- `ReturnType<T>`: Obtains the return type of a function type.

```ts
type FunctionReturnType = ReturnType<() => string>;
```

- `InstanceType<T>`: Obtains the instance type of a constructor function type.

```ts
class ExampleClass {}
type ExampleInstance = InstanceType<typeof ExampleClass>;
```

- `Exclude<T, U>`: Constructs a type by excluding from T all properties that are assignable to U.

```ts
type WithoutBoolean = Exclude<"a" | "b" | boolean, boolean>;
```

- `NonNullable<T>`: Constructs a type by excluding null and undefined from T.

```ts
type NonNullableString = NonNullable<string | null | undefined>;
```
