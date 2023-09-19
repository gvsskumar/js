// Take Array of elements print only odd number
const PrintOddNumber = (arr) =>{
    return arr.filter((el)=>{
        if(el%2===1){ return el;} 
    })
    }
    const res = PrintOddNumber([1,2,3,4,5,6,7,8,9,10]);
    console.log(res); 