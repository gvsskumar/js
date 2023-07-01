//Check UserName exists or not in object array
const users = [{id:1,name:"kumar",age:31,isActive:true},
{id:2,name:"venkata",age:27,isActive:false},
{id:3,name:"satya",age:29,isActive:true},
{id:4,name:"anil",age:21,isActive:false},
{id:5,name:"surya",age:30,isActive:true},
]
// Method-1 => Some
const CheckUname = (arr,uname) => {
    return arr.some((el)=>el.name===uname);
}
console.log(CheckUname(users,'kumar')); // true

// Method-2 find
const CheckUname2 = (arr,uname) => {
    let result = arr.find((el)=>el.name===uname);
    return Boolean(result)
}
console.log(CheckUname2(users,'kumar'));     // true
console.log(CheckUname2(users,'kumar123'));  // false