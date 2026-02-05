//Add Element to existing Array
//Example -1
const AddElement = (arr,el)=>{
     arr.push(el);
     return arr;
}
console.log(AddElement([1,2],3));  //[1,2,3]

//Example -2
const arr1 =[4,5,6]
const AddElement2 = (arr,el)=>{
    arr.push(el);
    return arr;
}
const newArr = AddElement2(arr1,3)
console.log(newArr);  //[4,5,6,3]
console.log(arr1);    //[4,5,6,3] 

//Example -3 Spread opterator
const arr3 =[4,5,6]
const AddElement3 = (arr,el)=>{
    return [...arr,el]
}
const newArr3 = AddElement3(arr3,3)
console.log(newArr3);  //[4,5,6,3]
console.log(arr3);    //[4,5,6] 
