const express = require('express')
const app = express()
const PORT = 3000

let count = 0;
function countReq(req, res, next) {
  count++;
  next()
}

app.get('/', countReq, (req, res) => {
  console.log(count)
  res.send("Server is working fine!!")
})


app.get('/hola', countReq, (req, res) => {
  console.log(count)
  res.send("Server is working fine!! with route Hola")
})

app.listen(PORT, () => {
  console.log(`Server is listning on port ${PORT}`)
})
