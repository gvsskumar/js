Array.prototype.customIncludes = function(num){
    
    for(let i=0;i<this.length;i++){
         const el = this[i];
         if(el===num){
             return true;
         }
    }
    return false;
}
const arr =  [1,2,3,4];
const num =3;
console.log(arr.customIncludes(5));
