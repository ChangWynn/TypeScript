## Contents

- [Top-Level Options](#top-Level-options)
  - [include](#include)
  - [exclude](#exclude)
  - [files](#files)
- [CompilerOptions](#compileroptions)
  - [Language and environment](#language-and-environment)
    - [target](#target)
    - [lib](#lib)
  - [JavaScript Support](#javaScript-support)
    - [allowJs](#allowjs)
    - [checkJs](#checkjs)
  - [Emit](#emit)
    - [outDir](#outdir)
    - [rootDir](#rootdir)
    - [noEmitOnError](#noemitonerror)
    - [sourceMap](#sourcemap)
    - [removeComments](#removecomments)
  - [Type Checking](#type-checking)
    - [strict](#strict)
    - [noImplicitAny](#noimplicitany)
    - [strictNullChecks](#strictnullchecks)
    - [noUnusedLocals](#nounusedlocals)
    - [noUnusedParameters](#nounusedparameters)
    - [noImplicitReturn](#noimplicitreturn)

# Top-Level Options

## include

An array of files or folders as string.

In `tsconfig.json`, add the option as a sibling of `"compilerOptions"`.

If the option is enabled, all the files/folders to compile must be listed.

```json
  "include": [
    "src", "analytics.ts"
  ]
```

## exclude

An array of files or folders as string.

In `tsconfig.json`, add the option as a sibling of `"compilerOptions"`.

`node_modules` is by default excluded when `exclude` option is not use.

```json
  "exclude": [
    "node_modules", "basics.ts", "**/*.dev.ts"
  ]
```

## files

An array of files only. No folders.

In `tsconfig.json`, add the option as a sibling of `"compilerOptions"`.

```json
  "files": [
    "app.ts", "basic.ts"
  ]
```

The TS compilation process is (`include` - `exclude`) meaning you can `include` a folder and `exclude` a subfolder.

# CompilerOptions

## Language and environment

### target

Sets the version of ECMAScript (ES) TypeScript should compile to.

```json
  "target": "es2020"
```

`NOTE: es6 and es2015 are aliases.`

### lib

`Libs` are the features made available for TS such as the `DOM`, `Math` etc.

TS includes a default set of `libs` when defining a `target`.

If the option is enabled, the assumed libs will be replace by those defines in the array, empty by default.

The below is default set brought by the `"target": "es2020"`.

```json
  "lib": [
    "dom",
    "es2020",
    "dom.iterable"
    "scripthost"
  ]
```

## JavaScript Support

### allowJs

Allow javascript files to be compiled.

```json
"allowJs": true,
```

### checkJs

Only check for errors from JS files. This option do not compile files.

```json
"checkJs": true,
```

## Emit

### outDir

Location for compiled files. Conventionally, JS files are compiled in a `dist` folder and TS files in `src` folder.

```json
"outDir": "./dist"
```

### rootDir

Location where the TS files live or where the project is. Conventionally, TS files are saved in a `src` folder.

```json
"rootDir": "./src"
```

### noEmitOnError

Defaulted to false.

Disable emitting files if any type checking errors are reported.

```json
"noEmitOnError": false
```

### sourceMap

In the `sources` tab of the browser console, only compiled JS files are shown by default.

When `sourceMap` is set to `true`, map files will be created on compilation and TS files will then be also available in the `source` tab of the browser console.

Helps with debugging.

```json
"sourceMap": true,
```

### removeComments

Remove all comments when compiles.

```json
"removeComments": true
```

# Type Checking

### strict

Enable all strict type-checking options unless they are explicitly set to `false`.

```json
"strict": true
```

### noImplicitAny

Enable error reporting for expressions and declarations with an implied 'any' type.

```json
"noImplicitAny": true
```

### strictNullChecks

Enable errors when value can potentially be `null` or `undefined`

```ts
"strictNullChecks": true
```

### noUnusedLocals

Enable error reporting when local variables aren't read.

```ts
"noUnusedLocals": true
```

### noUnusedParameters

Raise an error when a function parameter isn't read.

```ts
"noUnusedParameters": true
```

### noImplicitReturn

Enable error reporting for codepaths that do not explicitly return in a function.

```ts
"noImplicitReturn": true
```
