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