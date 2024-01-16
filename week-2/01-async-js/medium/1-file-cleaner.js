const fs = require('fs')

function readFile(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    let reterivedData = data;
    let newString = reterivedData.replace(/\s+/g, ' ').trim();
    replaceNewData(newString, filePath)
  })
}

function replaceNewData(newString, filePath) {
  fs.writeFile(filePath, newString, (err) => {
    if (err) {
      console.log("There are some errors", err)
    } else {
      console.log("extra space trimmed successfully and file updated")
    }
  })
}

let filePath = 'abc.txt'
readFile(filePath)