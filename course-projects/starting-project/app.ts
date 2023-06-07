const add = (n1: number, n2: number, result: boolean, text: string) => {
  const total = n1 + n2
  if (result) { console.log(text + total) }
  else { return total }
}
