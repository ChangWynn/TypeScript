"use strict";
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
addAndHandle(5, 5, (result) => {
    console.log(result);
});
const add = (n1, n2, result, text) => {
    const total = n1 + n2;
    if (result) {
        console.log(text + total);
    }
    else {
        return total;
    }
};
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultText = 'Result is: ';
add(number1, number2, printResult, resultText);
const userName = 'Chang';
