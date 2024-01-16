const fs = require('fs')


setTimeout(() => {
  fs.readFile(
    "a.txt", 'utf-8', (err, data) => {
      console.log(data);
    }
  )
}, 3000)

//Sync function
let sum = 0
for (let i = 0; i < 1000000000; i++) {
  sum = sum + i;
}
console.log(sum)

setTimeout(() => {
  console.log('I will print first')
}, 2000)
