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
