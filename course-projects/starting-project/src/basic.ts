const add = (n1: number, n2: number, result: boolean, text: string) => {
  const total = n1 + n2
  if (result) { console.log(text + total) }
  else { return total }
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultText = 'Result is: '

add(number1, number2, printResult, resultText)