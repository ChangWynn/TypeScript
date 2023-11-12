# Classes and Types

## Contents

- [Class Fields](#class-fields)
- [Public and private fields](#public-and-private-fields)
- [Protected modifier](#protected-modifier)
- [Readonly modifier](#readonly-modifier)
- [Shorthand Initialization](#shorthand-initialization)
- [Static methods and properties](#static-methods-and-properties)
- [Abstract classes](#abstract-classes)
- [Singleton pattern and private constructors](#singleton-pattern-and-private-constructors)

## Class Fields

In JS, there is no need to declare field before the constructor.

```js
class Department {
  constructor(name) {
    this.name = name;
  }
}

const accounting = new Department("Accounting");
```

In TS, fields must have a type declared before the constructor.

```ts
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const accounting = new Department("Accounting");
```

## public and private fields

By default, fields are `public`, there is no need to explicitly declare it.

`Private` fields are only accessible within the class. Subclasses can not interact with parent's `private` fields.

```ts
class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addEmployee = (employee: string): void => {
    this.employees.push(employee);
  };

  printEmployeeDetails = (): void => {
    console.log(this.employees);
  };
}

const accounting = new Department("Accounting");

accounting.employees.push("Max"); // compile error
accounting.addEmployee("Max"); // No errors
```

## protected modifier

`protected` modifier is similar to `private` but is more flexible and can be accessed by sub-classes.

- with private field

```ts
class Department {
  // private field
  private employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    this.id = id;
    this.name = name;
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}
```

```ts
class ITDept extends Department {
  constructor(id: number) {
    super(id, "IT");
  }

  addEmployee(employee: string): void {
    this.employees.push(employee); // compile error
  }
}
```

- with protected field

```ts
class Department {
  // private field
  protected employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    this.id = id;
    this.name = name;
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}
```

```ts
class ITDept extends Department {
  constructor(id: number) {
    super(id, "IT");
  }

  addEmployee(employee: string): void {
    this.employees.push(employee); // no errors
  }
}
```

## readonly modifier

`readonly` fields can not be changed once initialized.

The keyword can be added to `public` or `private` field.

```ts
class Department {
  private employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    this.id = id;
    this.name = name;
  }

  addEmployee = (employee: string): void => {
    this.employees.push(employee);
  };

  printEmployeeDetails = (): void => {
    console.log(this.employees);
  };
}
```

## Shorthand Initialization

Modifiers can be added as part of the constructor signature to avoid double declarations.

Despite being the default, `public` field must be exlicitly declared when using the shorthand syntax.

```ts
class Department {
  // private id: number;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: number, public name: string) {
    this.id = id;
    this.name = name;
  }

  addEmployee = (employee: string): void => {
    this.employees.push(employee);
  };

  printEmployeeDetails = (): void => {
    console.log(this.employees);
  };
}
```

## static methods and properties

`static` fields can only be accessed by classes and sub-classes, they can not be accessed by instances of classes.

```ts
class Department {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(private readonly id: number, private name: string) {
    this.id = id;
    this.name = name;
  }

  describe() {
    return `${Department.fiscalYear}, ${this.name}`;
  }
}

console.log(Department.fiscalYear); //output: 2023

const accounting = new Department(1, "Accounting");
console.log(accounting.describe()); //output: 2023, Accounting
```

## Abstract classes

Abstract classes are used to define shapes of objects and enforce certain contracts in the code.

- Implementation Details: an abstract class can have fully implemented methods (with details), as well as abstract methods (without details) that must be implemented by subclasses.

- Inheritance: an abstract classes are used as a base class for other classes.

- Instance Creation: an instance of an abstract class can not be created directly.

Syntax:

The class must be declared as `abstract` as well as every properties and methods you want to abstract away.

```ts
abstract class Department {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(private readonly id: number, protected name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(): void; // enforce implementation in sub-classes

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}
```

```ts
class ITDept extends Department {
  constructor(id: number) {
    super(id, "IT");
  }

  describe() {
    console.log(this.name);
  }
}
```

```ts
const it = new ITDept(2);

it.describe(); // output: IT
```

Abstract class can be seen as an alternative to interfaces but they have differences:

- Interfaces are purely a declaration. They can only be used to declare the shape of data but cannot contain any implementation details.
- A TypeScript class can implement multiple interfaces but can extend only one class.

## Singleton pattern and private constructors

A singleton is a design pattern used in software engineering which restricts the instantiation of a class to one single instance and provides a global point of access to this instance. The singleton pattern is used when exactly one object is needed to coordinate actions across the system.

```ts
abstract class Department {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(protected readonly id: number, protected name: string) {
    this.id = id;
    this.name = name;
  }

  abstract describe(): void;
}
```

```ts
class AccountingDept extends Department {
  // the singleton will be stored here
  private static instance: AccountingDept;

  // prevent instanciation from outside the class
  private constructor(id: number) {
    super(id, "Accounting");
  }

  // method to get or create the singleton
  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new AccountingDept(1);
    return this.instance;
  }

  describe() {
    console.log(this.id);
  }
}
```
