// const add = (n1: number, n2: number):number => {
//   return n1 + n2
// }

// const printResult = (num: number):void => {
//   console.log('Result: ' + num)
// }

// const returnResult = (num: number):undefined => {
//   console.log('Result: ' + num)
//   return;
// }

// printResult(add(5, 5))

// const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
//   const result = n1 + n2
//   cb(result)
// }

// addAndHandle(5, 5, (result) => {
//   console.log(result)
// })

// let userInput: any;
// let userName: string;

// userInput = 'Max';
// userName = userInput;

const generateError = (message: string, code: number): never => {
  throw {message: message, errorCode: code}
}