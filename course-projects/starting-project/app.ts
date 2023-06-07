const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Chang',
  age: 35,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author'] // (number | string)[]
}