// Array Element Shuffle
const Shuffle = (items) =>{
    return items
    .map((item)=>({sort:Math.random(),value:item}))
    .sort((item1,item2)=>item1.sort - item2.sort)
    .map((a)=>a.value);
}
console.log(Shuffle([1,2,3,4])); // [ 1, 3, 4, 2 ]