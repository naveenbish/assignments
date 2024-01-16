function wait1(t1) {
  return new Promise(function (resolve) {
    setTimeout(()=>{
        resolve(Date.now());
    }, t1);
    
  });
}

function wait2(t2) {
  return new Promise(function (resolve) {
    setTimeout(()=>{
        resolve(Date.now());
    }, t2);
  });
}

const timestamp = Date.now();
console.log(timestamp)

function calculateTime(t1, t2) {
  return Promise.all([wait1(t1), wait2(t2)]).then((values) => {
    return Date.now();
  });
}

calculateTime(1000,2000).then((value)=>{
    console.log(value);
})