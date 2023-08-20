// enum Role {
//   ADMIN,
//   READONLY,
//   AUTHOR,
// }

// const person = {
//   name: "Chang",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: Role.ADMIN,
// };

// let favoriteActivites: any[] = ["Sports", 1];

// console.log(person.nickname);

const combine = (input1: number | string, input2: number | string) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

const combinedAges = combine(30, 26);
