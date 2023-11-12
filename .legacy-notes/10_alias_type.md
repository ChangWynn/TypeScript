# alias type / custom type name

sorted of storing union or literal type into a variable
```typescript
type Name = number | string;
```

```typescript
type combinable = number | string;

const combine = (input1: combinable, input2: combinable) => {
  const total = input1 + input2
  return total
}
```

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

```typescript
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

```typescript
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```
To:
```typescript
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```