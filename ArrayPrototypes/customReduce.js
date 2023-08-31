Array.prototype.myReducer = function(callback){
    var a =0;
    for(let i=0;i<this.length;i++){
        callback(a = a+this[i]);
    }
    return a;
}
const arr = [1,2,3,4];
const sum = arr.myReducer((acc,item)=>acc+item); 
console.log(sum);
