//Given a Array, removing the middle element.
/* 
Input: [1,2,3,4,5]; 
Output: [1,2,4,5]
Element '3' is middle on the array
*/
const removeMiddleElement = (arr) =>{
    let midelIndex = Math.floor(arr.length/2);
    let res = arr.filter((el,index)=>index!=midelIndex);
    return res;
    }
    console.log(removeMiddleElement([1,2,3,4,5]))