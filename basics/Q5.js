//Write a function which help to archive sum(a)(b) and return product of a & b
//Note: Using Currying
const curry = (fn) => {
    return f1 = (...args) =>{
        if(args.length>=fn.length){
            return fn(...args);
        }
        else{
            return f2 = (...moreArgs)=>{
                let newArgs= args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    }
}
// Four Parameters Multiplication 
const CurriedMul = curry((a,b,c,d)=>a*b*c*d);
console.log(CurriedMul(1)(2)(3)(4))  // 24
console.log(CurriedMul(1,2)(3)(4))   // 24
console.log(CurriedMul(1)(2,3)(4))   // 24 
console.log(CurriedMul(1,2,3)(4))    // 24

// Three Parameters Sum 
const CurriedSum = curry((a,b,c)=>a+b+c);
console.log(CurriedSum(1)(2)(3))  // 6
console.log(CurriedSum(1,2)(3))   // 6
console.log(CurriedSum(1)(2,3))   // 6 
console.log(CurriedSum(1,2,3))    // 6