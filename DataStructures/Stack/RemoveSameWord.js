//Given a Array, removing the same word.
/* 
Input: ['ab','aa','aa','gk','bcd','ab']; 
Output: ["gk", "bcd"]
*/
const RemoveSameWords = (arr) =>{
    let map = {}
    for(let i=0;i<arr.length;i++){
         if(!map[arr[i]]){
            map[arr[i]] =1;
         }else{
             map[arr[i]]++;
           }
    }
    let res =[];
    for(let word in map){
        if(map[word]===1){
          res.push(word);
          }
    }
    return res;
 
 }
 console.log(RemoveSameWords(['ab','aa','aa','gk','bcd','ab']));