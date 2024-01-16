// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }


class Robot{
  constructor(name, technology){
    this.name = name;
    this.technology = technology;
    console.log(name);
    console.log(this.technology);
  }
  // nameCall(name){
  //   console.log(name)
  // }
}

const obj = new Robot("phyco","5thGen");
// obj.nameCall();