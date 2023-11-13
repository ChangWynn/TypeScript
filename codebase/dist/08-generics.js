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
