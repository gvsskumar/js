const promise = new Promise((reslove,reject)=>{
    reslove("start");
 });
 promise.then((data)=>{
   setTimeout(()=>{
     console.log(data);
    },0);
   
   return "Waiting....";
 //   
 }).then((data1)=>{
   setTimeout(()=>{
     console.log(data1);
    },20000);
 
   return "End.";
 })
 .then((data1)=>{
   setTimeout(()=>{
     console.log(data1);
    },40000);
   return "End.";
 });