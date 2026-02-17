class phone {
  constructor(type, make, num, sim) {
    this.type = type;
    this.make = make;
    this.num = num;
    this.sim = sim;
    this.activeSim = 0;
  }
  calling() {
    const from = this.num[this.activeSim];
    console.log(`${from} calling to 9876543210`);
  }
  messaging() {
    const from = this.num[this.activeSim];
    console.log(`Messaging ${from} to 9876543210`);
  }
  switchSim() {
    if (this.sim === 2) {
      this.activeSim = this.activeSim === 0 ? 1 : 0;
      console.log(`switched to SIM ${this.activeSim + 1}`);
    } else {
      console.log("Only one SIM available");
    }
  }
}

class smartPhone extends phone{
    constructor(make, num, sim, os){
        super("SmartPhone", make, num, sim);
        this.os = os;
    }
    install(app){
        console.log(`${app} installed on ${this.os}`);
    }
}
class android extends smartPhone{
    constructor(make, num, sim){
        super(make,num,sim,"Android");
    }
}
class iOS extends smartPhone{
    constructor(make,num,sim){
        super(make, num, sim,"iOS");
    }
}
class keypad extends phone{
    constructor(make,num,sim){
        super("keypad", make, num, sim);
    }
    play(){
        console.log("Playing Radio");
    }
}

let p1 = new android(2022, [9898989899, 9797979797], 2);
let p2 = new iOS(2023, [8888888888], 1);
let p3 = new keypad(2010, [7777777777, 7676767676], 2);
p1.calling();
p1.switchSim();
p1.calling();
p2.calling();
p2.switchSim();
p3.messaging();
p3.switchSim();
p3.messaging();
p1.install("summa");
p2.install("2nd app");
p3.play();

