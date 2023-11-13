"use strict";
// function that merges 2 objects to return one new object
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj = merge({ name: "Max", hobbies: ["coding"] }, { age: 30, children: false });
const countAndDescribe = (element) => {
    let description = "Got no value.";
    if (element.length === 1) {
        description = "Got 1 element.";
    }
    else if (element.length > 1) {
        description = `Got ${element.length} elements.`;
    }
    return description;
};
console.log(countAndDescribe("Hi, There!")); // Got 10 elements
console.log(countAndDescribe([1, 2, 3, 4, 5])); // Got 5 elements
// console.log(countAndDescribe({ name: "Max", age: 10 })); // Got no value // compilation error
const extractAndConvert = (obj, key) => {
    return `Name: ${obj[key]}`;
};
// console.log(extractAndConvert({name "Max"}, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addData(item) {
        this.data.push(item);
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return [...this.data];
    }
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addData(item) {
        this.data.push(item);
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addData("Max");
textStorage.addData("Mike");
textStorage.removeData("Max");
console.log(textStorage.getData()); // output: ["Mike"]
const numberStorage = new DataStorage();
numberStorage.addData(4);
numberStorage.addData(8);
numberStorage.removeData(4);
console.log(numberStorage.getData()); // output: [8]
const createCourseGoal = (title, description, date) => {
    let courseGoal = {};
    // some title validation
    courseGoal.title = title;
    // some description validation
    courseGoal.description = description;
    // some date validation
    courseGoal.completeUntil = date;
    return courseGoal;
};
const people = ["Max", "Mike"];
people.push("Mark");
people.pop();
