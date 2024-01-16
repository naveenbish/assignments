function clock(hour, minute, second) {
  j = 0
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      console.log(`${hour}:${minute}:${second}`)

      second++;
      if (second === 61) {
        second = 1
        minute++
        if (minute === 60) {
          minute = 0
          hour++
          if (hour === 24) {
            hour = 0
          }
        }
      }
    }, j * 1000)
    j++
  }
}


const realTime = new Date().toTimeString().slice(0, 8);
const timeArr = realTime.split(":");
const hour = parseInt(timeArr[0])
const minute = parseInt(timeArr[1])
const second = parseInt(timeArr[2])
clock(hour, minute, second)
