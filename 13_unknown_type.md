# unknown type

```typescript
let userInput: unknown
```

`unknown` is more restrictive than `any`

```typescript
let userInput: unknown;
let userName: string;

userInput = 'Max';
userName = userInput; // error
```
```typescript
let userInput: any;
let userName: string;

userInput = 'Max';
userName = userInput; // no error
```