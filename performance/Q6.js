// How to check two arrays at lest one common key
const arr =["a","b","c","x",undefined]
const arr2 = ["w","s","y","s",undefined]
function commonProperty(arr,arr2){
// Loop through first array and create object where properties === items in the array
let map = {}
for(let i=0;i<arr.length;i++){
   if(!map[arr[i]]){
     const item = arr[i];
    map[item] = true;
    }
}
//Loop through second array and check if item existing created object
for(let j=0;j<arr2.length;j++){
   if(map[arr2[j]]){
      return true;
    }
}
return false;
}
console.log(commonProperty(arr,arr2))

//--------------------------------------------//
const arr =["a","b","c","x"]
const arr2 = ["w","s","y","s",undefined]
function commonProperty(arr,arr2){
return arr.some(item=>arr2.includes(item));
}
console.log(commonProperty(arr,arr2))