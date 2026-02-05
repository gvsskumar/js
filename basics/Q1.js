//Write code get array of namesfrom given array of users
const users = [{id:1,name:"kumar",age:31,isActive:true},
{id:2,name:"venkata",age:27,isActive:false},
{id:3,name:"satya",age:29,isActive:true},
{id:4,name:"anil",age:21,isActive:false},
{id:5,name:"surya",age:30,isActive:true},
]
//a) Print All UserNames
//b) Print Active UserName
//c) Print Active UserName and Age
//d) Print UserDetails Sort by Age
//e) Print USerDetails age>=27 AND isActive:true
//-------------------------------------------------------------//
//a) Print All UserNames
const getUserName1 = (users) =>{
  let result = users.map((el)=>el.name);
  return result;
} 
console.log(getUserName1(users))

//b) Print Active UserName
const getUserName2 = (users) =>{
    let result = users.filter((user)=>user.isActive===true).map((el)=>el.name);
    return result;
  } 
  console.log(getUserName2(users))

//c) Print Active UserName and Age
const getUserName3 = (users) =>{
    let result = users.filter((user)=>user.isActive===true).map((el)=>
    { return "UserName:"+el.name+", Age:"+el.age} );
    return result;
  } 
  console.log(getUserName3(users))

//d) Print UserDetails Sort by Age
const getUserName4 = (users) =>{
    let result = users.sort((a,b)=>a.age<b.age?-1:1).map((el)=>{return el.name+" => " +el.age})
    return result;
  } 
  console.log(getUserName4(users))

//e) Print USerDetails age>=27 AND isActive:true  
const getUserName5 = (users) =>{
    let result = users.sort((a,b)=>a.age<b.age?-1:1).filter((el)=>el.age>=30).map((el)=>{return el.name+" => " +el.age})
    return result;
  } 
  console.log(getUserName5(users))