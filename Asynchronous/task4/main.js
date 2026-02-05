const asyncFun1 = (callback) =>{
    setTimeout(()=>{
        callback(1);
    },3000);
};

const asyncFun2 = (callback) =>{
    setTimeout(()=>{
        callback(2);
    },2000);
};

const asyncFun3 = (callback) =>{
    setTimeout(()=>{
        callback(3);
    },1000);
};


const asyncParallel = (asyncFuncs,callback) =>{
    const resultArr = new Array(asyncFuncs.length);
    let resultCounter =0;
    asyncFuncs.forEach((asyncFuncs,index)=>{
        asyncFuncs((value)=>{
            resultArr[index] = value;
            resultCounter++;
            if(resultCounter>=asyncFuncs.length){
                callback(resultArr)
            }
            
        })
    });
}

asyncParallel([asyncFun1,asyncFun2,asyncFun3],(result)=>{
    console.log(result);
});