/* function hello(a, b) {
    let temp;
    a = temp;
    a = b;
    b = temp
}
let a = 5, b= 10;
console.log(a, b);

let array=[2,2,3,];
function arr(array){
    array[0]= 1;
}
arr(array);
console.log(array)

const square = function sq(n){
    return n*n;
}
console.log(square(5)); */

/* function parent(n){
    let m = n+1;
    function child(){
        console.log(m);
        var x = 10;
    }
    child()
    console.log(x);
}
parent(5); */

/* const multiply = (mul, ...args)=>{
    return args.map((x)=>{
        return x*mul;
    });
}
console.log(multiply(2, 2,3,4,)); */

/* const myFunc = {
    name : "kumara",
    greet :function (){
        console.log(this.name); }

}
myFunc.greet(); */

/* const a = 3+4;
console.log(a); */

/* const arr = ['0ne' , 'two', 'three']; */
/* const one = arr[0];
const two = arr[1];
const three = arr[2];
*/
/* const [one, two , three] = arr;
console.log(one , two , three);  */

/* var a = 3;
console.log(a == '3');
 */

/* let a = null;
a = a?? 1;
console.log(a);
if(a){
    console.log("true part")
} */
/* const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
} */
/*
let a = 1_000_000;
console.group(a); */

/* console.log(Date()); */
/* let arr = [];
arr[49] = 50;
console.log(arr.length);
console.log(arr); */
/* let arr = [];
arr.length = 3;
console.log(arr.length);
arr[5]= 5;
console.log(arr.length); */
/* let arr1 = [ 1, 2, 3];
let arr2 = [4, ,7 ,6];
arr1.push(arr2);
arr3 = arr1.flat();
console.log(arr3);
arr3.sort();
console.log(arr3);
console.log(arr1);
console.log(arr2);
arr2 = arr1 + arr2;
console.log(arr2);
console.log(typeof arr2);
let str = arr1.join(" ");
console.log(str); */

/* const map = new Map();
map.set('key1' , [1,2]);
map.set('key2' , [2,2]);
map.set('key3' , [3,2]);
console.log(map);
console.log(map.get('key3'));
map.delete('key2');
console.log(map);
console.log(map.has('key2'));
for(keys of map){
    console.log(keys);
} */
/*
function Car(name, brand, price){
    this.name = name;
    this.brand = brand;
    this.price = price;

}

Car.prototype.drive = function() {
    const result  = `${this.name} is manufactured by ${this.brand} and the price is ${this.price}`;
    return result;
}

c1 = new Car('BE6', 'mahindra', 10000);
const c2 = new Car('XEV 9E', 'mahindra', 100000);
const c3 = new Car('Sierra' , 'TATA', 5000)

console.log(c1.drive());
console.log(c2.drive());
console.log(c3.drive()); */
/*
const color = class color{
    #redValue; #greenValue;#blueValue;
    constructor(r,g,b){
        this.#redValue = r;
        this.#greenValue = g;
        this.#blueValue = b;
    }
    get colors(){
        return `Red : ${this.#redValue} and Green : ${this.#greenValue} abd Blue : ${this.#blueValue}`;
    }
    updateRed(r){
        if(r > 0 && r < 256){
            this.#redValue = r;
            return true
        }
        return false;

    }
    addColors(newColor){
        return `New color formned by adding red: ${this.#redValue + newColor.#redValue} `
    }
}
const c1 = new color(2 , 5 ,6);
console.log(c1.colors);
const c2= new color(1,2,3,);
console.log(c2.colors);
c2.updateRed(1000)?console.log('updated successfully') : console.log('Not updated');
console.log(c2.colors);
console.log(c1.addColors(c2)); */

/* function doSomething(n){
    return new Promise((resolve , reject)=>{
        if(n%2==0){
            resolve(n);
        }
        else
            reject(n);
    });
}


doSomething(4)
  .then(() => {
    console.log("Do this");
    throw new Error("Something failed");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
 */
/*
P1 = new Promise((resolve, reject)=>{
    const arrived = true;
    console.log("hello")
    if(arrived){
        resolve();
    }
    else reject();
}).then(()=>console.log(" p1: Arrived"))
.catch(()=>console.log("p1 :Did not arrived"));
console.log("p1")

P2 = new Promise((resolve, reject)=>{
    const arrived = false;
    if(arrived){
        resolve();
    }
    else{
        reject();
    }
}).catch(()=>console.log("p2 :Did not arrived"));
P2.then(()=>console.log("p2 :Arrived"))
console.log("p2")


P3 = new Promise((resolve, reject)=>{
    const arrived = false;
    if(arrived){
        resolve();
    }
    else reject();
})
.catch(()=>console.log("P3:did not arrived"));
P3.then(()=>console.log("p3: Arrived"))
console.log("p3")


P4 = new Promise((resolve, reject)=>{
    const arrived = false;
    if(arrived){
        resolve();
    }
    else reject();
}).then(()=>console.log("p3 : Arrived"))
.catch(() => {
    try{
        throw new Error("Mistake occured at P4")
    }
    catch (err){
        console.error(err);
    }
})
console.log('p4');

Promise.resolve().then(() => console.log("A"));

Promise.reject().then(()=> console.log("summa")).catch(() => console.log("B"));
Promise.resolve().then(() => console.log("C")); */

/*
function* factGenerator(){
    let max = 100;
    let a =1;
    while(true){
        if(a > max)
                break;
        yield a*a++;
    }

}

const iter = factGenerator();

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value); */

/* const currency = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'INR'
})

console.log(currency.format(10000));
// Assume that the local time zone is UTC
const targetDate = new Date(2022, 0, 1); // 2022-01-01 midnight in the local time zone
const results = [];

for (const calendar of ["gregory", "hebrew"]) {
  for (const timeZone of ["America/New_York", "Asia/Tokyo"]) {
    const df = new Intl.DateTimeFormat("en-US", {
      calendar,
      timeZone,
      // More on these later
      dateStyle: "full",
      timeStyle: "full",
    });
    results.push({ calendar, timeZone, output: df.format(targetDate) });
  }
}

console.table(results); */

/* const p1 = new Promise((resolve, reject)=>{
    reject();
})
.then(()=>console.log("then block") , ()=> reject)
.catch(()=>console.log("catch called"))
.then(()=>console.log("promise returned from the catch has beem resolved")); */

/* console.log(3n + 1n);
 */


function phone(type, make, num, sim) {
  this.type = type;
  this.make = make;
  this.num = num;
  this.sim = sim;
  this.activeSim = 0;
}

phone.prototype.calling = function() {
  const from = this.num[this.activeSim];
  console.log(`${from} calling to 9876543210`);
};

phone.prototype.msg = function() {
  const from = this.num[this.activeSim];
  console.log(`Messaging ${from} to 9876543210`);
};

phone.prototype.switch = function() {
  if (this.sim === 2) {
    this.activeSim = this.activeSim === 0 ? 1 : 0;
    console.log(`switched to SIM ${this.activeSim + 1}`);
  } else {
    console.log("Only one SIM available");
  }
};


function smartPhone(make, num, sim, os) {
  phone.call(this, "smartphone", make, num, sim);
  this.os = os;
}
smartPhone.prototype = Object.create(phone.prototype);
smartPhone.prototype.install = function(app) {
  console.log(`${app} installed on ${this.os}`);
};



function android(make, num, sim) {
  smartPhone.call(this, make, num, sim, "Android");
}
android.prototype = Object.create(smartPhone.prototype);


function iOS(make, num, sim) {
  smartPhone.call(this, make, num, sim, "iOS");
}
iOS.prototype = Object.create(smartPhone.prototype);



function keypad(make, num, sim) {
  phone.call(this, "keypad", make, num, sim);
}
keypad.prototype = Object.create(phone.prototype);
keypad.prototype.play = function() {
  console.log("Playing Radio");
}

let p1 = new android(2022, [9898989899, 9797979797], 2);
let p2 = new iOS(2023, [8888888888], 1);
let p3 = new keypad(2010, [7777777777, 7676767676], 2);
p1.calling();
p1.switch();
p1.calling();
p2.calling();
p2.switch();
p3.msg();
p3.switch();
p3.msg();
p1.install("summa");
p2.install("2nd app");
p3.play();
p1.play();
