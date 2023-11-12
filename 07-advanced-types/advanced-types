# Advanced Types

## Contents

- [Intersection types](#intersection-types)
- [Type Guards](#type-guards)
- [Type Casting](#type-casting)
- [Function Overloads](#function-overloads)

## Intersection types

Builds a new type by intersecting multiple types.

- For objects, it is a combination of all the properties

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
```

```ts
type Manager = Employee & Admin;

// staff must have properties defined by both Employee and Admin
let staff: Manager = {
  name: "Max",
  privileges: ["hire staff"],
  startDate: new Date(),
};
```

- With union-types, it is the common types between the types.

```ts
type BasicType = string | number | boolean;
type Numeric = number | Date | boolean;

type CombinedType = BasicType & Numeric; // number | boolean
```

- will be of type `never` if no intersections are found

```ts
type Phrase = string;
type Numeric = number;

type CombinedType = Phrase & Numeric; // never
```

## Type Guards

Type guards are a way to check of which type a data is.

### Problem

JS does not know about the types typescript allow us to define.

Example:

```ts
type Manager = {
  name: string;
  privileges: string[];
};

type Techinician = {
  name: string;
  skills: string[];
};

type Employee = Manager | Techinician;
```

```ts
const printDetails = (employee: Employee) => {
  // JS does not know about 'Manager' type.
  if (typeof employee === "Manager") {
    console.log(employee.name, employee.privileges);
  } else {
    console.log(employee.name, employee.skills);
  }
};
```

### Solution

- the discriminated union

A technique to check which is the type of an object is to enforce a property unique to it.

```ts
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
};
```

- the `in` keyword

Checking a type by looking for unique properties.

```ts
type Manager = {
  name: string;
  privileges: string[];
};

type Techinician = {
  name: string;
  skills: string[];
};

type Employee = Manager | Techinician;

const printDetails = (employee: Employee) => {
  if ("privileges" in employee) {
    console.log(employee.name, employee.privileges);
  } else {
    console.log(employee.name, employee.skills);
  }
};
```

- the `instanceof` keyword for classes

```ts
class Car {
  drive(): void {
    console.log("driving a car...");
  }
}

class Truck {
  drive(): void {
    console.log("driving a truck...");
  }

  loadCargo(amount: number): void {
    console.log(`loading ${amount}kg of merchandise.`);
  }
}

type Vehicle = Car | Truck;
```

```ts
const car = new Car();
const truck = new Truck();

const useVehicle = (vehicle: Vehicle): void => {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(5);
  }
};
```

## Type Casting

### Problem

In some scenario, TS can not tell if a value is guaranteed to return something and therefore it will infere it with a `null` type.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <h1>TypeScript</h1>
  </body>
</html>
```

```ts
const h1Element = document.querySelector("h1");

// HTMLHeadElement | null
h1Element.innerText = "TypeScript!";
```

### Solution

- #### The non-null assertion operator `!`

The non-null assertion operator tells the TypeScript compiler that the expression to which it is applied will not produce a null or undefined value, even if the compiler's static analysis suggests otherwise.

```ts
const h1Element = document.querySelector("h1")!;

h1Element.innerText = "TypeScript!";
```

- #### The Type Assertion with `<>` or `as`

```ts
const h1Element = <HTMLHeadingElement>document.querySelector("h1");

h1Element.innerText = "TypeScript!";
```

```ts
const h1Element = document.querySelector("h1") as HTMLHeadingElement;

h1Element.innerText = "TypeScript!";
```

It is also possible to use them inline. TS will still infere that the value can be null but it will not complain.

```ts
const h1Element = document.querySelector("h1");

(<HTMLHeadingElement>h1Element).innerText = "TypeScript!";
```

```ts
const h1Element = document.querySelector("h1");

(h1Element as HTMLHeadingElement).innerText = "TypeScript!";
```

## Index Signatures

Also called `Index Properties`, `Index Signatures` are a feature that allows you to define the types of values that can be accessed on an object using index notation (square brackets) or a key of a specific type.

`Index properties` allow you to define an object type where the keys are not known in advance and can vary dynamically at runtime. This is useful when you want to work with objects that have properties with dynamic names.

In the example below, all properties of the object must have keys and values as string.

```ts
type ErrorMessages = {
  [type: string]: string;
};

const errorMessages: ErrorMessages = {
  email: "Not a valid email",
  password: "Not a valid password",
  download: 404, // compile error
};
```

## Function Overloads

Function overloading in TypeScript is a concept that allows you to have multiple function signatures for a single function implementation.

This feature is particularly useful when a function can accept different types and numbers of parameters and you want to ensure type safety for each variation.

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string | number, b: string | number): string | number {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

add(5, 5);
add("Max", "Mike");
```

`NOTE: function overloading works with function declarations and not function expressions. Therefore, function overloading is not applicable to arrow functions.`
