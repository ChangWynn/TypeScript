# Enum Type

Automatically enumerated list of global constant
```
enum <Name> {}
```

- enum is a keyword to declare an enum type
- the convention is to start the name of the enum with a capital letter
- enum member are written all in caps letters
- numbers are assigned automatically and in an increasing way to each number
```typescript
enum Role { ADMIN, READ_ONLY, AUTHOR }
```

to manually assign numbers to members: 

```typescript
enum Role { ADMIN = 5, READ_ONLY = 10, AUTHOR = 100 }
```

example
```typescript
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: 'Chang',
  age: 35,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
  console.log('is the admin')
}
```