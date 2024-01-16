function addNum() {

  const num1 = parseInt(document.getElementById("num1").value)
  const num2 = parseInt(document.getElementById("num2").value)

  // fetch("https://sum-server.100xdevs.com/sum?a=" + num1 + "&b=" + num2).then((response) => {
  //   response.text().then((ans) => {
  //     document.getElementById("container").value = ans;
  //   })
  // })

  fetch("http://127.0.0.1:3000/sum?num1=" + num1 + "&num2=" + num2).then((response) => {
    response.text().then((ans) => {
      document.getElementById("container").value = ans;
    })
  })
}
