/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
  timestamp = Date.now();
  return new Promise(function(resolve) {
    setTimeout(()=>{
      resolve(Date.now())
    }, t1)
  })
}

function wait2(t2) {
  return new Promise(function(resolve) {
    setTimeout(()=>{
      resolve(Date.now())
    }, t2)
  })
}

function wait3(t3) {
  return new Promise(function(resolve) {
    setTimeout(()=>{
      resolve(Date.now())
    }, t3)
  })
}

let timestamp = Date.now();

function calculateTime(t1, t2, t3) {
  return Promise.all([wait1(t1*1000), wait2(t2*1000), wait3(t3*1000)]).then((values) => {
    return Date.now() - timestamp;
  })
}

// calculateTime(4,5,7).then((value)=>{
//   console.log(value)
// });


module.exports = calculateTime;