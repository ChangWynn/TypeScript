# Classes and Types

## Contents

- [Top-Level Options](#top-Level-options)
  - [include](#include)
  - [exclude](#exclude)
  - [files](#files)
- [CompilerOptions](#compileroptions)

  - [Language and environment](#language-and-environment)
    - [target](#target)
  - [JavaScript Support](#javaScript-support)
    - [allowJs](#allowjs)
  - [Emit](#emit)

    - [outDir](#outdir)

  - [Type Checking](#type-checking)
    - [strict](#strict)

## Basic Class with TS

in JS, there is no need to declare field before the constructor.

```js
class Department {
  constructor(name) {
    this.name = name;
  }
}

const accounting = new Department("Accounting");
```

In TS, fields must have a type declared outside of the constructor

```ts
class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const accounting = new Department("Accounting");
```
