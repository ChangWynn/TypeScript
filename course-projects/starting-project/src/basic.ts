// const add = (n1: number, n2: number, result: boolean, text: string) => {
//   const total = n1 + n2
//   if (result) { console.log(text + total) }
//   else { return total }
// }

// const number1 = 5
// const number2 = 2.8
// const printResult = true
// const resultText = 'Result is: '

// add(number1, number2, printResult, resultText)
interface Name {
  readonly firstname?: string;
}
interface Greetable extends Name /* , OtherInterface */ {
  greet(phrase: string): void;
}

// Person will implements both Greetable and Name interface
class Person implements Greetable /*, OtherInterface */ { 
  firstname?: string;
  age = 30;

  constructor(firstname?: string) {
    if (firstname) {
      this.firstname = firstname
    }
  }

  greet(phrase: string) {
    if (this.firstname) {
      console.log(phrase + this.firstname)
    }
    else {
      console.log(phrase)
    }
    return
  }
}

let user: Greetable

user = new Person("Chang")
// type AddFn = (a:number, b: number) => number

// same as

// interface AddFn {
//   (a: number, b: number): number
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2
// }
