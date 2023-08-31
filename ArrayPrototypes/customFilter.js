Array.prototype.myFilter = function(callback){
        var a=[];
        for(let i=0;i<this.length;i++){
            if(callback(this[i])==true){
                a.push(this[i]);
            }
        }
        return a;
    }
    const arr = [2,4,6,8,];
    const res = arr.myFilter((el)=>el>5)
    console.log(res);