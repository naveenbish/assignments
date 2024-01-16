// function counter(callback) {
//   console.log("Just trying to call you back")
//   const str = "counter is calling you to say hello"
//   callback(str);
//
// }
//
// function hello(str) {
//   console.log(
//     "Just saying hello!", "\nmessage : ", str
//   )
// }
//
// counter(hello)

function counter(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      console.log(i)
    }, (n - i) * 1000)
  }
}
let n = 10
counter(n);
