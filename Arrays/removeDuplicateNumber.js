// Remove duplicate values [10,4,2,9.20,30,40]
let arr = [10,4,2,9,10,2,4,20,4,20,30,40,30];
// Using filter() Method
// Using set() Method
// Using reduce() Method
// Using indexOf() Method
// Using forEach() Method

// Method-1  - filter,includes
const removeDuplicate = (arr) =>{
    let res =[];
    arr.filter((el)=>{
        if(!res.includes(el)){
         res.push(el);
        }
    });
   return res;
}
console.log(removeDuplicate(arr));

const removeDuplicate1 = (arr) =>{
    let res = arr.filter((el,index)=>arr.indexOf(el)===index);
   return res;
}
console.log(removeDuplicate1(arr));
//-------------------------//
//Method -2 Set
const removeDuplicate2 = (arr) =>{
   //return new Set([...arr]);   //--object formate
   return [...new Set(arr)];     //--array formate
}
console.log(removeDuplicate2(arr));
//------------------------//
//Method -3 reduce()
const removeDuplicate3 = (arr) =>{
   let res = arr.reduce((acc, curr) =>{
    if (!acc.includes(curr)){ acc.push(curr);}        
    return acc;
}, []);
   return res;
}
console.log(removeDuplicate3(arr));
//------------------------//
//Method -4 indexOf()
const removeDuplicate4 = (arr) =>{
   let res = []
   for(let i=0;i<arr.length;i++){
    if(!res.includes(arr[i])){
        res.push(arr[i]);
    }
   }
   return res;
}
console.log(removeDuplicate4(arr));
//------------------------//
//Method -5 forEach()
const removeDuplicate5 = (arr) =>{
   let res = []
   arr.forEach((el)=>{
    if(!res.includes(el)){
        res.push(el);
    }   
   })
   return res;
}
console.log(removeDuplicate5(arr));