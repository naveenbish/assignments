const express = require('express')
const app = new express()
const cors = require('cors')
const PORT = 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.send("I am working fine.")
})


app.get('/sum', (req, res) => {
  const a = parseInt(req.query.num1);
  const b = parseInt(req.query.num2);
  const sum = a + b;
  res.send(sum.toString())
})

app.listen(PORT, () => {
  console.log(`Server is running on : ${PORT}`)
})
