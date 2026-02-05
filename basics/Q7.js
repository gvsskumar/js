// Array Concat OR Merge multiple arrays
const arr1 = [1,2,3]
const arr2 = [4,5]
const ArrayMerge = (arr1,arr2) => {
      // Spread operator using combined arrays      
      return [...arr1,...arr2];
      // Concat method using combined arrays
   // return arr1.concat(...arr2);
}
const arr3 = ArrayMerge(arr1,arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);