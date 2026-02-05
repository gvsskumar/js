// How to find duplicate Value in array elements
//Method-1 -- Time complexity O(n^n)
const arr1 = [1,2,3,4,5,4,6,7,8]
const findDuplicateNumber = (arr) =>{
    let map ={}
    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]===arr[j]){
                return arr[i];
            }
        }
    }
    return undefined;
}
console.log(findDuplicateNumber(arr1)); // 4


//Method-2 -- Time complexity O(n)
const arr2 = [1,2,3,4,5,4,6,7,8]
const findDuplicateNumber2 = (arr) =>{
    let map ={}
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]){
            return arr[i];
        }else{
            map[arr[i]] =i;
        }
    }
    return undefined;
}
console.log(findDuplicateNumber2(arr2)); // 4

//------------------------------------------//
// How to find duplicate Value in array elements
// Method-1 -- Time complexity O(n^n)
const str = "Venkata Satya";
const findDuplicateCharacter = (str) =>{
    let strArr = str.split("");
    let map ={}
    for(let i=0;i<strArr.length;i++){
        for(let j=i+1; j<strArr.length;j++){
            if(strArr[i]===strArr[j]){
                return strArr[i];
            }
        }
    }
    return undefined;
}
console.log(findDuplicateCharacter(str)); // a


// Method-2 -- Time complexity O(n)
const str2 = "Venkata Satya";
const findDuplicateCharacter2 = (str) =>{
    let strArr = str.split("");
    let map ={}
    for(let i=0;i<strArr.length;i++){
        if(map[strArr[i]]){
            return strArr[i];
        }else{
            map[strArr[i]] =i;
        }
    }
    return undefined;
}
console.log(findDuplicateCharacter2(str2)); // a