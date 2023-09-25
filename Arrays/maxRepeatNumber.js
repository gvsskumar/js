// find heighsted no.of times occured value (4 is 3times occured)
let arr = [10,4,2,9,10,2,4,20,4,20,30,40,30]


const findValue= (arr) => {
let obj ={};  let res='';
  arr.filter((el,index)=>{
      if(obj[el]){obj[el]+= 1;}else{obj[el] = 1;}
  });  

  let maxVal = Math.max(...Object.values(obj));
  
  for(let key in  obj){
     if(obj[key]===maxVal){
     res = `${key} is repeated :${maxVal} times`;
    }
   }
   return res;
}
let res =findValue(arr);
console.log(res);  //"4 is repeated :3 times"

