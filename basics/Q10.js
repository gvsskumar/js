// Sorting 
// Example-1 Sorting Number
const SortNum = (arr)=>{
 return arr.sort((a,b)=>a>b?1:-1); 
 
}
console.log(SortNum([5,2,7,3,1])); // [1,2,3,5,7]

// Example-2 Sorting String based
const SortColor = (arr)=>{
    return arr.sort((a,b)=>a>b?1:-1);
    
   }
console.log(SortColor(["Red","Blue","Orange","Green"]));  //[ 'Blue', 'Green', 'Orange', 'Red' ]