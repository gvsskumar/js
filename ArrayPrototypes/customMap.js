Array.prototype.myMap = function(callback){
    let a =[];
    for(let i=0;i<this.length;i++){
        a.push(callback(this[i]))
    }
    return a;
}
const arr =  [1,2,3,4];
const res1 = arr.myMap((el)=>el*3);
console.log(res1);
