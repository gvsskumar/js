//Find the number of occurences of minimum value & maximum value in the array
const MinValLength = (arr) =>{
    let minVal = Math.min(...arr);
    let result = arr.filter((el)=>el===minVal);
    return `Minimum Value ${minVal} , length ${result.length}`;
}
console.log(MinValLength([1,2,3,4,1,2,3,1]));

const MaxValLength = (arr) =>{
    let maxVal = Math.max(...arr);
    let result = arr.filter((el)=>el===maxVal);
    return `Maximum Value ${maxVal} , length ${result.length}`;
}
console.log(MaxValLength([1,2,3,4,1,2,3,1]));