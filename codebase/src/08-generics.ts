// function that merges 2 objects to return one new object

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Max", hobbies: ["coding"] }, { age: 30, children: false });

// console.log(mergedObj.name);
// console.log(mergedObj.hobbies);
// console.log(mergedObj.age);
// console.log(mergedObj.children);

type StringArray = string[];
type GenericStringArray = Array<string>;

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T) => {
  let description = "Got no value.";
  if (element.length === 1) {
    description = "Got 1 element.";
  } else if (element.length > 1) {
    description = `Got ${element.length} elements.`;
  }

  return description;
};

console.log(countAndDescribe("Hi, There!")); // Got 10 elements
console.log(countAndDescribe([1, 2, 3, 4, 5])); // Got 5 elements
console.log(countAndDescribe({ name: "Max", age: 10 })); // Got no value // compilation error
