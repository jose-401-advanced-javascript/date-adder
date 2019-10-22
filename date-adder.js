function drop (str) {
  const newStr = str.slice(0, -1)
  return newStr
}

const test = '100000s'
let time = drop(test)

Number(time)

let newTime = time * 1000
console.log(newTime);

const date = new Date('10/21/19')

const parse = Date.parse(date)

console.log('***parsed date', parse);

const newDate = parse + newTime

console.log(Date(newDate));


