//Parenthesis Checker
/* 
Input: exp = “[()]{}{[()()]()}” 
Output: Balanced
Explanation: all the brackets are well-formed

Input: exp = “[(])” 
Output: Not Balanced 
Approches: Stack
*/
const CheckString = (str) =>{
    let i=-1;
    let stack = [];
    for(let ch of str){
        if(ch==='(' || ch=== '{' || ch ==='['){
          stack.push(ch);
          i++;
        }else{
            if(i>=0 && ((stack[i]==='(' && ch=== ')') || (stack[i]==='{' && ch=== '}')||(stack[i]==='[' && ch=== ']'))){
                stack.pop();
                i--;
            }else{ return false;}

        }
    }
    return i=-1;
}
let str = '({[]})'; // Balanced
//let str = '({[(]}))'; // Not Balanced
if(CheckString(str)){
    console.log('Balanaced String!');
}else{
    console.log('Not Balanced String!')
}