const asyncFn = (callback) =>{
    setTimeout(()=>{
        callback("Its workign on a Callback Fn");
    },2000);
};

asyncFn((message)=>{
    console.log("calback:",message)
});