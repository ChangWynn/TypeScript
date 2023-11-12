# Interfaces

An interface is a way to define a contract or a structure for an object. It specifies a set of properties and methods that an object must have in order to be considered an instance of that interface. Interfaces are used to define the shape of objects and to ensure that objects adhere to a specific structure.

Syntax:

```ts
interface Person {
  name: string;
  age: number;

  greet(): void;
}
```

## Contents

- [Interfaces extending interfaces](#interfaces-extending-interfaces)
- [Implementing classes](#implementing-classes)
- [Interfaces as function types](#interfaces-as-function-types)
- [Optional parameters and properties](#optional-parameters-and-properties)

## Interfaces extending interfaces

An interface can extend another interface.

```ts
interface Named {
  name: string;
}

interface Person extends Named {
  age: number;
}

class StaffMember implements Person {
  // ..
}
```

## Implementing classes

A class should have at least the properties and methods specified by the interface, but it can have additional properties and methods as well.

To implement multiple interfaces, separate them with commas.

```ts
interface Person {
  name: string;
  age: number;

  greet(): void;
}

class StaffMember implements Person, AnotherInterface {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
  }
}
```

`NOTE: An interface can not include private or protected fields.`

## Interfaces as function types

```ts
interface addFn {
  (a: number, b: number): number;
}
```

```ts
const add: addFn = (a, b) => {
  return a + b;
};
```

```ts
console.log(add("1", 2)); // compile error
console.log(add(1, 2)); // no errors
```

## Optional parameters and properties

Typescript allows interface to have optional properties by adding a question mark `?` after the field name.

Classes and interfaces are loosely coupled meaning that an optional property in an interface can be mandatory in the class.

```ts
interface Person {
  name?: string; // optional
  age?: number; // optional

  greet(): void;
  showAge?(): void; // optional
}
```

```ts
class StaffMember implements Person {
  // name is mandatory but age is optional
  constructor(public name: string, public age?: number) {
    this.name = name;
    if (age) {
      this.age = age;
    }
  }

  greet() {
    console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
  }
}

const max = new StaffMember("Max"); // no errors. 'age' is optional.
```
