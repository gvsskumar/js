//Remove duplicate values in the array
//Method-1 : new Set()
const uniqueArr = (arr) =>{
    return [...new Set(arr)]
}
console.log(uniqueArr([1,2,3,4,2,3,1])); // [1,2,3,4]

// Method -2 
const uniqueArr2 = (arr) =>{
    return arr.reduce((acc,el)=>{
        return acc.includes(el)?acc:[...acc,el];
    },[])
}
console.log(uniqueArr2([1,2,3,4,2,3,1])); // [1,2,3,4]

//Method-3 : forEach() & includes()
const uniqueArr3 = (arr) =>{
    const result =[];
    arr.forEach(el => {
        if(!result.includes(el)){
            result.push(el);
        }
    });
    return result;
}
console.log(uniqueArr3([1,2,3,4,2,3,1])); // [1,2,3,4]

