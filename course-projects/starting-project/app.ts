const add = (n1: number, n2: number):number => {
  return n1 + n2
}

const printResult = (num: number):void => {
  console.log('Result: ' + num)
}

const returnResult = (num: number):undefined => {
  console.log('Result: ' + num)
  return;
}

printResult(add(5, 5))
