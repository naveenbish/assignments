const fs = require('fs')

const data = "hello, I came here from js using file system.\n"

fs.appendFile('a.txt', data, (err) => {
  if (err) {
    console.log("We got some error", err)
  } else {
    console.log("File written successfully.")
  }
})
