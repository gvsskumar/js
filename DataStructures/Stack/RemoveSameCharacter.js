//Given a String, removing the same character.
/* 
Input: 'venkatasatya'; 
Output: 'venksy';
*/
const RemoveSameCharacter = (str) =>{
    let map = {}
    for(let i=0;i<str.length;i++){
         if(!map[str[i]]){
            map[str[i]] =1;
         }else{
             map[str[i]]++;
           }
    }
    let res =[];
    for(let word in map){
        if(map[word]===1){
          res.push(word);
          }
    }
    return res.join("");
 
 }
 console.log(RemoveSameCharacter('venkatasatya'));