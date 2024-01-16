function addNum() {
  const num1 = parseInt(document.getElementById("num1").value)
  const num2 = parseInt(document.getElementById('num2').value)
  const ans = num1 + num2;
  console.log(ans)
  var printAns = document.getElementById("container")
  // printAns.innerHTML = `The Sum of these numbers is : ${ans}`
  printAns.value = ans
}
