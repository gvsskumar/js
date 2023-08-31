// How many ways to create object
//1) Object literal
const objLiterial = () =>{
    let t0 = performance.now();
    let obj = {name:"kumar",age:32,isActive:true};
    let t1 = performance.now();
    console.log("Calculate Excution Time  : " + (t1 - t0) + " milli seconds"); // 0.020
    console.log(obj);
}
objLiterial();

// 2) Function Constructor
function createObjFun(name,age,isActive){
    this.name = name;
    this.age = age;
    this.isActive = isActive;
}
let t0 = performance.now();
const obj2 = new createObjFun("Kumar",32,true);
let t1 = performance.now();
console.log("Calculate Excution Time  : " + (t1 - t0) + " milli seconds"); // 0.055
console.log(obj2);

// 3) Class Constructor
class MyClass{
    constructor(name,age,isActive){
        this.name = name;
        this.age = age;
        this.isActive = isActive;

    }
}
let t0 = performance.now();
const obj3 = new MyClass("Kumar",32,true);
let t1 = performance.now();
console.log("Calculate Excution Time  : " + (t1 - t0) + " milli seconds"); // 0.043
console.log(obj3);

//4) Object.create()
let obj4 = Object.create({});
let t0 = performance.now();
obj4['name'] = "Kumar";
obj4['age'] = 32;
obj4['isActive'] = true;
let t1 = performance.now();
 console.log("Calculate Excution Time  : " + (t1 - t0) + " milli seconds"); // 0.022
 console.log(obj4);
