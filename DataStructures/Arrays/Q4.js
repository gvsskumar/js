// How to Merge Two Array of Elemts with Sorting Order
// Take 2 Array arguments like arr1,arr2
// Check with 2 arrays length if arr1.length===0 matched print arr2 only,
// if arr2.length ===0 matched print arr1 only

function mergeSortArrays(arr1,arr2){
   const mergeArray = [];
   let array1Item = arr1[0];
   let array2Item = arr2[0];
   let i=1;
   let j=1;
   if(arr1.length===0 && arr2.length===0){
    return ("Both Array Elements are empty!");
   }
   if(arr1.length===0){
    return arr2;
   }
   if(arr2.length===0){
    return arr1
   }

   while(array1Item || array2Item){
        if(!array2Item || array1Item<array2Item){
            mergeArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        }else{
            mergeArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
   }
   return mergeArray;
}
const result = mergeSortArrays([0,3,4,31],[6,4,30]);
console.log(result);