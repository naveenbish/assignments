const express = require('express')
const app = express()
const PORT = 3000

// let count = 0;
// function countReq(req, res, next) {
//   count++;
//   next()
// }

app.use((req, res, next) => {
  const startTime = Date.now()

  res.on('finish', () => {
    const endTime = Date.now();
    const elapedTime = endTime - startTime;

    // Log the request method, URL, and the Time taken
    console.log(`${req.method} ${req.url} - Time taken : ${elapedTime}`)
  })
  next();
})


app.get('/', (req, res) => {
  // console.log(count)
  res.send("Server is working fine!!")
})

app.get('/hola', (req, res) => {
  // console.log(count)
  res.send("Server is working fine!! with route Hola")
})

app.listen(PORT, () => {
  console.log(`Server is listning on port ${PORT}`)
})
