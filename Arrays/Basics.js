let arr = [1,2,3,4,5,6,7,8,5];

//1) length : Find Array length
//console.log(arr.length);  //8

//2) indexOf(index) : find the Array Element index 
// Match - print the starting index position
// Not Match - return (-1) value
//console.log(arr.indexOf(5)); // index-4


//3) lastIndexOf(value) : find the Array Element last index 
// Match - print the ending index position
// Not Match - return (-1) value
//console.log(arr.lastIndexOf(9)); // last index-8

//4) find(callbk) : if check value is existed or not in an array
// Match - print the starting  value in array
// Not Match - undefined;
//console.log(arr.find((ele)=>ele===5)); // 5
//console.log(arr.find((ele)=>ele===9)); // undefined

//4) findIndex(callbk) : if check value is existed or not in an array
// Match - print the starting  value in array
// Not Match : -1;
//console.log(arr.findIndex((ele)=>ele===5)); // index : 4
//console.log(arr.findIndex((ele)=>ele===9)); // index : -1

//5) findLastIndex(callbk) : if check value is existed or not in an array
// Match - print the starting  value in array
// Not Match : -1;
//console.log(arr.findLastIndex((ele)=>ele===5)); // index : 8
//console.log(arr.findLastIndex((ele)=>ele===9)); // index : -1

//6) includes(value) : if check value is existed or not in an array
// Match : returns "true";
// Not Match :returns "false"
//console.log(arr.includes(5)); // true
//console.log(arr.includes(9)); // false

//7) filter(callbk) : if check value is existed or not in an array elements
// Match : returns matched elements returns ;
// Not Match : [] - empty array
// Creating new array
//let res1 = arr.filter((ele,index)=>ele>5)
//console.log(res1); // [ 6, 7, 8 ]
//let res2 = arr.filter((ele,index)=>ele>25)
//console.log(res2); // []

//8) map(callbk) : 
// Match : return array of all elements
// Not Match : undefined
// Creating new array
//let res1 = arr.map((ele,index)=>ele*2)
//console.log(res1); // [ 2,4,6,8,10,12,14,16,10]

//8) concat(value) : 
// Match : append value ending position
//console.log(arr.concat(10)); //[1,2,3,4,5,6,7,8,5,10]

//9) arr.slice(Start,end) // Add,Replace,Remove
// starting index 4, ending index 7
//console.log(arr.slice(4,7)); //[5,6,7]
// only starting index 4, print remaing all elements
//console.log(arr.slice(4)); // [ 5, 6, 7, 8, 5 ]
// only starting index 4, -1
console.log(arr.slice(1,0,3)); // [ 5, 6, 7, 8, 5 ]