//Q4) How Many ways to copy object keys & values
//1) Spread operator {...}
let originalObj1 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
let t0 = performance.now();
let copyObj1 = {...originalObj1};
let t1 = performance.now();
console.log(copyObj1);
console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 0.020

//2) Object.assign({},obj);
 let originalObj2 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
 let t0 = performance.now();
 let copyObj2 = Object.assign({},originalObj2);
 let t1 = performance.now();
 console.log(copyObj2);
 console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 0.027
 
//3) JSON.stringify() and JSON.parse()
 let originalObj3 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
 let t0 = performance.now();
 let copyObj3 = JSON.parse(JSON.stringify(originalObj3))
 let t1 = performance.now();
 console.log(copyObj3);
 console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 0.077

//4) Object Refernce
  let originalObj4 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
  let t0 = performance.now();
  let copyObj4 = {name:originalObj4.name,age:originalObj4.age,phone:originalObj4.phone,isActive:originalObj4.isActive}
  let t1 = performance.now();
  console.log(copyObj4);
  console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 0.031

//5) Object.create()
   let originalObj5 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
   let t0 = performance.now();
  let copyObj5 = Object.create(originalObj5);
  let t1 = performance.now();
  console.log(copyObj5);
  console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 0.017
   
