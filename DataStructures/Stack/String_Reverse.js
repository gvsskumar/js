//Given a string, reverse it using stack.
/* 
Input: exp = “Kumar” 
Output: ramuK
Explanation: Reverse a string using Stack 
Approches: Stack
*/
class Stack {
    constructor(n)
    {
        this.top = -1;
        this.size = n;
        this.a = new Array(this.size);
    } 
    isEmpty()
    {
        return(this.top < 0);
    }
    push(x)
    {

            this.a[++this.top] = x;
            return this;
        
    }

    pop()
    {
        
            let x = this.a[this.top--];
            return x;
        
    }

}
function reverse(str)
{
     
    let n = str.length;
    let obj = new Stack(n);
      
    // Push all characters of string
    for(let i = 0; i < n; i++){
        obj.push(str[i]);
    }
        
  
    // Pop all characters of string
     for(let i = 0; i < n; i++)
    {
        let ch = obj.pop();
        str[i] = ch;
    }
}
 
// Driver Code
let s = "Kumar".split("");
reverse(s);
console.log(s.join(""));