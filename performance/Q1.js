// How many ways to Object Empty?
// for in
const obj = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
function EmptyObjForIn(obj) {
  let t0 = performance.now();
  for(let key in obj){
    delete obj[key];
  }
  let t1 = performance.now();
  console.log("Calculate Excution Time: " + (t1 - t0) + " milli seconds"); // 0.020
  console.log(obj);
}
const obj1 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
EmptyObjForIn(obj1);
// ForEach
function EmptyObjForEach(obj1) {
    let objArr = Object.keys(obj1);  
    let t0 = performance.now();
    objArr.forEach((el)=>{
      delete obj1[el];
    })
    let t1 = performance.now();
    console.log("Calculate Excution Time: " + (t1 - t0) + " milli seconds"); // 0.005
    console.log(obj1);
  }
  EmptyObjForEach(obj1);
  // {}
  const obj2 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
  function EmptyObj(obj2) {
    
    let t0 = performance.now();
    obj2 = {}
    let t1 = performance.now();
    console.log("Calculate Excution Time: " + (t1 - t0) + " milli seconds"); // 0.004
    console.log(obj2);
  }
  EmptyObj(obj2);

  // forloop
  const obj3 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true };
  function EmptyObjForLength(obj3) {
    
    let t0 = performance.now();
    let objArr = Object.getOwnPropertyNames(obj3);
    for(let i=0;i<objArr.length;i++){
        delete obj3[objArr[i]];
    }
    let t1 = performance.now();
    console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 0.011
    console.log(obj3);
  }
  EmptyObjForLength(obj3);