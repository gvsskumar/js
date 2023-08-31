Array.prototype.customlength = function(){
    let a = 0;
    if(this.length>0){
      a= this.length;    
    }
    
    return a;
}
const arr =  [1,2,3,4,7,8,9];
console.log(arr.customlength())
