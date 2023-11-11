# never type

when a function never returns.

In the example, below, this function is garanteed to crash, therefore will never return.
An infinite loop would also never return

the return type inferes is `void` but it is good practice to explicitly assign it to `never`

```typescript
const generateError = (message: string, code: number): never => {
  throw {message: message, errorCode: code}
}
```