/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result = this.result + num;
  }

  subtract(num) {
    this.result = this.result - num;
  }

  multiply(num) {
    this.result = this.result * num;
  }

  divide(num) {
    if (num > 0) {
      this.result = this.result / num;
    } else {
      throw new CheckCondition("Division by 0 encountered");
    }
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  // This is the function where the brackets () will get processed
  operation(start, end, str) {
    // console.log(str)
    let ans = 0;
    let tempStr = str.slice(start, end);

    // For Multiplication 
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '*') {
        ans = parseFloat(tempStr[i - 1]) * parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }

    // For Division 
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '/') {
        ans = parseFloat(tempStr[i - 1]) / parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }

    // For Addition 
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '+') {
        ans = parseFloat(tempStr[i - 1]) + parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }

    // For Subtract
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '-') {
        ans = parseFloat(tempStr[i - 1]) - parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }

    // console.log(tempStr)
    // console.log(str)
    str.splice(start - 1, end - start + 2, ans);
    // console.log(str)
  }


  // Finial Operation on expression where no brackets are caught
  finalOperation(start, end, str) {
    // console.log(str)
    let ans = 0;
    let tempStr = str.slice(start, end);
    // console.log(tempStr)

    // For Multiplication 
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '*') {
        ans = parseFloat(tempStr[i - 1]) * parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }

    // For Division 
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '/') {
        ans = parseFloat(tempStr[i - 1]) / parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }

    // For Addition 
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '+') {
        ans = parseFloat(tempStr[i - 1]) + parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }

    // For Subtract
    for (let i = 0; i < tempStr.length; i++) {
      if (tempStr[i] == '-') {
        ans = parseFloat(tempStr[i - 1]) - parseFloat(tempStr[i + 1]);
        // to remove
        tempStr.splice(i + 1, 1);
        tempStr.splice(i, 1);
        tempStr.splice(i - 1, 1);
        tempStr.splice(i - 1, 0, ans);
        i = 0
      }
    }
    str[0] = tempStr
    // console.log(str)
    // str.splice(start-1, end-start+2, ans);
    // console.log(str)
  }

  hasNonAlphabeticElement(arr) {
    for (let element of arr) {
      if (/^[a-zA-Z]+$/.test(element)) {
        return false;
      }
    }
    return true;
  }

  hasNonZero(str) {
    for (let ele of str) {
      if (ele == '0') {
        return false
      }
    }
    return true
  }

  calculate(str) {
    // str = str.match(/(\d+|\+|\*|\/|\(|\))/g)
    const alpCheck = this.hasNonAlphabeticElement(str)
    // str = str.match(/(\d+|\+|\*|\/|\(|\)|\-)/g);
    str = str.match(/(\d+(\.\d+)?|\+|\*|\/|\(|\)|\-)/g);
    const zeroCheck = this.hasNonZero(str)
    if (!zeroCheck) {
      throw new CheckCondition("Alphabatic element encountered");
    }
    if (!alpCheck) {
      throw new CheckCondition("Alphabatic element encountered");
    }
    // console.log(str)
    let start = -1;
    let end = -1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '(') {
        start = i;

      }
      if (str[i] == ')') {
        end = i;
        if (start >= 0) {
          this.operation(start + 1, end, str)
        } else {
          throw new Error('Decimal values are not allowed.');
        }
        i = 0
      }
    }
    if (end == -1 && start >= 0) {
      throw new Error('Decimal values are not allowed.');
    }
    if (end >= 0 && start == -1) {
      throw new Error('Decimal values are not allowed.');
    }
    this.finalOperation(0, str.length, str)
    // console.log(str)
    this.result = parseFloat(str[0])
  }

}

module.exports = Calculator;
