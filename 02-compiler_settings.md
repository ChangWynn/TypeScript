# Compiler Settings

## Using Watch Mode

#### 1. Watching and compiling a single file

```
tsc <FILENAME> --watch
tsc <FILENAME> -w
```

#### 2. Watching and compiling an entire project

- Navigate to your project directory and run:

```
tsc --init
```

```
tsc --watch
tsc -w
```

#### 3. Including and Excluding files

In the `tsconfig.json` file, before the closing curly braces:

- `exclude`: an array of files or folders as string. `node_modules` is by default already excluded.

```json
  "exclude": [
    "node_modules", "basics.ts", "**/*.dev.ts"
  ]
```

- `include`: an array of files or folders as string. if used, all the files to compile must be added.

```json
  "include": [
    "app.ts", "basic.ts"
  ]
```

The TS compilation process is `include - exclude` meaning you can have a folder in `include` and a subfolder in `exclude`.

- `files`: an array of files only. No folders.

```json
  "files": [
    "app.ts", "basic.ts"
  ]
```

#### 4. Setting a compilation target

Sets the version of ES TypeScript should compile to.
In the `tsconfig.json` file, look for:"

```json
  "target": "es2020"
```

#### 5. Understand TS Core Libs

- `lib`: `Libs` are the features made available for TS such as the DOM.
  Some default `libs` are assumed when defining a `target`, hence the lib key commented out in the `tsconfig.json`. If commented in, the assumed libs will be replace by those defines in the array, empty by default. This below is the same libs brought by the `target`.

```json
  "lib": [
    "dom",
    "es2020",
    "dom.iterable"
    "scripthost"
  ]
```

#### 6. Working with Source Maps

The browser console only shows the compiled JS files by default.

When set to `true`, Source Maps will create map files on compilation. `map` files will also show in the browser console for us to see also the TS codebase.

Helps with debugging.

In the `tsconfig.json` file, look for: "

```json
"sourceMap": true,
```

#### 6. outDir and rootDir

- `outDir`: location where the compiled files will be stored. Conventionally, compiled JS files are stored in a `dist` folder and TS files in `src` folder.

In the `tsconfig.json` file, look for:"

```json
"outDir": "./dist"
```

- `rootDir`: location where the TS files live or where the project is.

In the `tsconfig.json` file, look for:"

```json
"rootDir": "./src"
```

#### 7. Stop Emitting on Compilation Errors

To prevent files to be compiled when errors are detected, add the following in the `tsconfig.json` file:"

```json
"noEmitOnError": true, // false by default
```

#### 8. Strict Compilation

- `strict`: if true, this option is the shortcut to set all the options that follows it within the same section to true.

```json
"strict": true,
```

#### Removing Comments at compilation

In the `tsconfig.json` file, look for:"

```json
"removeComments": true,
```
