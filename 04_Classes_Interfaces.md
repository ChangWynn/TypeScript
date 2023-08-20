# Classes with TS

```typescript
class Department {
  name: string;
  constructor(name: string) {
    this.name = name
  }
}
```

## Public and Private field
- private: not accessible directly from outside the class nor from subclasses
- protected: same as private but accessible from subclasses
```typescript
class Department {
  public name: string = 'NO_NAME'
  private employees: string[] = []

  constructor(name: string) {
    this.name = name;
  }

  // ...
}
```

## Shorthand Initialization

To avoid double initialisation like this:
```typescript
class Department {
  public name: string = 'NO_NAME'
  private name: id;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // ...
}
```

We can do instead by adding the public or private keywords:

```typescript
class Department {
  constructor(private id: number, public name: string) { }

  // ...
}
```

## Readonly keyword

```typescript
class Department {
  constructor(private readonly id: number, public name: string) {
    this.id = id;
    this.name = name;
  }

  // ...
}
```

## Static classes 
- methods or properties of a class that are not accessed by an instance of the class. They can be called without creating new instances and directly on the class
```typescript
class Department {
  static year () { return 2023}
  constructor(private readonly id: number, public name: string) {
    this.id = id;
    this.name = name;
  }

  // ...
}

console.log(Department.year()) //=> 2023
```
