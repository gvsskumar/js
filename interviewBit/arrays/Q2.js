// How to check repeated elements existed or not?
const arr = [1,2,3,4,5,6,7,8]
//Approches
//step1 : No.of inputs arguments -1 [array formate]
//step2 : expected no.of out arguments [boolean true/false]
//step3 : Using New Set() Datastructures 
//step4 : Time Complexity:O(n),   Space Complexity: Very less code
// Solution -1
// const twiceNumber = (arr) =>{
//     const s = new Set(arr);  // O(n)
//     return s.size!==arr.length; //O(1)
// }
// const res = twiceNumber(arr);
// console.log(res);

// Solution -2
//Approches
//step1 : No.of inputs arguments -1 [array formate]
//step2 : expected no.of out arguments [boolean true/false]
//step3 : Using forEach() & Object.keys() Datastructures 
//step4 : Time Complexity:O(n^2),   Space Complexity: Very less code
const twiceNumber = (arr) =>{
    let obj ={}  //O(1)
    arr.forEach((el) => {   //O(n)
        let index = arr.indexOf(el);
        obj[index] = el;
    });
    return Object.keys(obj).length!==arr.length; //O(n) !== O(1)
}
const res = twiceNumber(arr);
console.log(res);


