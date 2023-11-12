"use strict";
// type Manager = {
//   name: string;
//   privileges: string[];
// };
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(5, 5));
console.log(add("Max", "Mike"));
