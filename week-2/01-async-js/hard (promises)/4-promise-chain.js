/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
  timestamp = Date.now();
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(Date.now());
    }, t1);
  });
}

function wait2(t2) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(Date.now());
    }, t2);
  });
}

function wait3(t3) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(Date.now());
    }, t3);
  });
}

let timestamp = Date.now();

function calculateTime(t1, t2, t3) {
  return new Promise((resolve)=>{
    const result  = wait1(t1*1000).then(()=>{
        return wait2(t2*1000);
    }).then(()=>{
        return wait3(t3*1000);
    }).then(()=>{
        return Date.now() - timestamp;
      })
      resolve(result);
  })
}

// calculateTime(4,5,7).then((value)=>{
//     console.log(value)
// })
module.exports = calculateTime;
