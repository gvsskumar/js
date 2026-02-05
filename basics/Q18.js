const throttle = (func,timeout =3000) => {
    let isWaiting = false;
      return (...args) => {
        if(!isWaiting) {
            func.apply(this,args);
            isWaiting = true;
            setTimeout(()=>{
                isWaiting = false
            },timeout)
        }
                    
      };
  };
  
  const saveInput = (name) =>{
      console.log("saveInput",name);
  }
  const processChange = throttle(saveInput,2000);
  processChange("Kumar1");
  
  setTimeout(()=>{
      processChange("Kumar2");
  },1000);
  
  setTimeout(()=>{
      processChange("Kumar3");
  },1200);
  
  setTimeout(()=>{
      processChange("Kumar4");
  },2400);