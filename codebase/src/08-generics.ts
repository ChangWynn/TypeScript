// function that merges 2 objects to return one new object

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Max", hobbies: ["coding"] }, { age: 30, children: false });

console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.age);
console.log(mergedObj.children);

type StringArray = string[];
type GenericStringArray = Array<string>;
