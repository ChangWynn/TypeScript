# Object Types

```typescript
const person = {
  name: 'Chang',
  age: 35
}
```
Behind the scenes, the same as:
```typescript
const person: {
  name: string;
  age: number;
} = {
  name: 'Chang',
  age: 35
}
```
TypeScript doesn't allow access to non-existent key
```typescript
console.log(person.nickname) // compilation error
```

## Nested Objects
Object types can also be created for nested objects.

Let's say you have this JavaScript object:

```typescript
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```
This would be the type of such an object:

```typescript
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```
So you have an object type in an object type so to say.