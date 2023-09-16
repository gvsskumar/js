// How to find  traget sum matched elements in array
const arr = [1,2,3,4,5,6,7,8,9,10];
 let traget=14; let obj ={}

 const SumOfElements = (arr) =>{
    for(let i=0;i<arr.length;i++){     // O(n)
      let diff = traget-arr[i];        // O(1)
      let index = arr.indexOf(diff);   // O(1)
         if(traget===(+arr[i] + +arr[index]) && (arr[i]!==arr[index])){ //O(1)
            obj[i] = arr[i]+','+arr[index]; //0(1)
          }
    }
   return obj;
 }
 const res = SumOfElements(arr);  
 console.log(res); // Time Complexites = O(n) + O(4) = O(n)