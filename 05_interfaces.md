# Interfaces

An interface describes the structure of an object.
We can use it to describe how an object should look like.

## Interfaces VS custom types

A custom type can store other things like union types.

Interfaces can only be used to describe the structure of an object,

```typescript
interface Person {
  firstname: string;
  age: number;
  greet(phrase: string): void;
}

let user: Person;

user = {
  firstname: "Max",
  age: 35,
  greet(phrase: string) {
    console.log(phrase + this.firstname);
  },
};

user.greet("Hi ");
```

## Interfaces in classes

Interfaces are widely use as a starter blueprints for classes.

Interface can be used as a contract a class can implement and has to adhere to.

And the same interface can be reuse across multiple classes.

The class has to have the property the interface and can also includes new ones. This enforces the implementation of methods or property.

For example, in this code, TS will show an error if the greet method or the firstname property is not present in the `Person` class.

> Do not forget to definte the type of your new class instance

```typescript
// interface
interface Greetable {
  firstname: string;
  age: number;
  greet(phrase: string): void;
}

// class that implement the interface
class Person implements Greetable /*, OtherInterface */ {
  firstname: string;
  age = 30;

  constructor(n: string) {
    this.firstname = n;
  }

  greet(phrase: string) {
    console.log(phrase + this.firstname);
  }
}

let user: Greetable; // define the type of user before instanciating it
user = new Person("Chang");

console.log(user.greet("Hi "));
```

## readonly

If the `readonly` keyword is used in an interface, it doesnt need to be added in the class. The `readonly` rule will still apply.

```typescript
interface Greetable {
  readonly firstname: string;
  age: number;
  greet(phrase: string): void;
}

class Person implements Greetable /*, OtherInterface */ {
  firstname: string;
  age = 30;

  constructor(n: string) {
    this.firstname = n;
  }

  greet(phrase: string) {
    console.log(phrase + this.firstname);
  }
}

let user: Greetable;
user = new Person("Chang");
user.firstname = "Max"; // Compil error because readonly

console.log(user.greet("Hi "));
```

## Combining interfaces with `extends`

use the `extends` keyword to combine an interface with the current one. If more than one, separate with a comma.

If a class implement an interface, it will also include the interfaces it extends too.

```typescript
interface Name {
  readonly firstname: string;
}
interface Greetable extends Name /* , OtherInterface */ {
  greet(phrase: string): void;
}

// Person will implements both Greetable and Name interface
class Person implements Greetable /*, OtherInterface */ {
  firstname: string;
  age = 30;

  constructor(n: string) {
    this.firstname = n;
  }

  greet(phrase: string) {
    console.log(phrase + this.firstname);
  }
}
```

## Interface as a function

Interface can also be used to define a function

```typescript
type AddFn = (a: number, b: number) => number;

// same as

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
```

## Optional parameters & properties

add a question mark to the property name, method or parameter to make it optional and not enforce its implementation

```typescript
interface Name {
  readonly firstname?: string; // optional
}
interface Greetable extends Name {
  greet?(phrase: string): void; // optional
}

class Person implements Greetable {
  firstname?: string; // has to be here too
  age = 30;

  constructor(firstname?: string) {
    // same here
    if (firstname) {
      this.firstname = firstname;
    }
  }

  greet(phrase: string) {
    if (this.firstname) {
      console.log(phrase + this.firstname);
    } else {
      console.log(phrase);
    }
    return;
  }
}
```
