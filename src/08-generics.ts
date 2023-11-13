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
// console.log(countAndDescribe({ name: "Max", age: 10 })); // Got no value // compilation error

const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U): string => {
  return `Name: ${obj[key]}`;
};

// console.log(extractAndConvert({name "Max"}, "name"));

class DataStorage<T extends string | number> {
  private data: T[] = [];

  addData(item: T): void {
    this.data.push(item);
  }

  removeData(item: T): void {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getData(): T[] {
    return [...this.data];
  }
}

// class DataStorage {
//   private data: string[] | number[] = [];

//   addData(item: string | number): void {
//     this.data.push(item);
//   }

//   removeData(item: string | number): void {
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getData(): string[] | number[] {
//     return [...this.data];
//   }
// }

const textStorage = new DataStorage<string>();
textStorage.addData("Max");
textStorage.addData("Mike");
textStorage.removeData("Max");
console.log(textStorage.getData()); // output: ["Mike"]

const numberStorage = new DataStorage<number>();
numberStorage.addData(4);
numberStorage.addData(8);
numberStorage.removeData(4);
console.log(numberStorage.getData()); // output: [8]

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};

  // some title validation
  courseGoal.title = title;

  // some description validation
  courseGoal.description = description;

  // some date validation
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
};

const people: Readonly<string[]> = ["Max", "Mike"];

// people.push("Mark");
// people.pop();
