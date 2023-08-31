//Q3) How many ways to check Object Empty OR Not ?
//1) JSON.stringify(obj) === '{}'
let obj = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true }
let t0 = performance.now();
console.log(JSON.stringify(obj)==='{}'); // false
 //note:  false -->Not empty Obj, true-->empty Obj
let t1 = performance.now();
console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 5.877 

//2) for...in, obj.hasOwnProperty(key)
let obj2 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true }
let t0 = performance.now();
const checkObj = (obj2) =>{
    
    for(let key in obj2){
        if(obj2.hasOwnProperty(key)){
            return false;
        }
        
    }
    return true;
}
let t1 = performance.now();
console.log(checkObj(obj2)); // false
console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 0.011 
   
//3) Object.keys(obj).length === 0
let obj3 = { name: "Kumar",age:32,gender:"male",phone:9346814210,isActive:true }
let t0 = performance.now();
console.log(Object.keys(obj3).length===0) // false
let t1 = performance.now();
console.log("Calculate Excution Time : " + (t1 - t0) + " milli seconds"); // 6.159 

