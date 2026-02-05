//Given a Array, reverse it using stack.
/* 
Input: exp = [10,30,50,70,90] 
Output: [90,70,50,30,10]
Explanation: Reverse a array using Stack 
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
function reverse(arr)
{
     
    let n = arr.length;
    let obj = new Stack(n);
      
    // Push all characters of string
    for(let i = 0; i < n; i++){
        obj.push(arr[i]);
    }
        
  
    // Pop all characters of string
     for(let i = 0; i < n; i++)
    {
        let ch = obj.pop();
        arr[i] = ch;
    }
}
 
// Driver Code
let s = [10,30,50,70,90];
reverse(s);
console.log(s);