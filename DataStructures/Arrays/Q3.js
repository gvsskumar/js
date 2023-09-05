// How to Print Reverse String
// Ex: Str = "Venkata Satya Surya Kumar";
//Method-1
function ReverseStr(str){
    // Declaration empty Array
    let Backword = []
    // Check With Valid String or Not
    if(!str || str.length<2||typeof str !='string'){
        return ("Bad String Formate! ")
    }
    // Calculate the string length & put inside a for iterations
    for(let i=str.length-1;i>=0;i--){
        Backword.push(str[i]);
    }
    //Array to String Conversion using Join('') or toString('')
    return Backword.join('');
}
// const result = ReverseStr("Venkata Satya Surya Kumar");
// console.log(result);

//Method -2 
function ReverseStr2(str){
    // Using predefined methods Split() , reverse(),Join('') or toString('')
    // split() - string to array conversion 
    // reverse() - reverse the array of element
    //Check string Valid or Not
    // Check With Valid String or Not
    if(!str || str.length<2||typeof str !='string'){
        return ("Bad String Formate! ")
    }
    
    return str.split('').reverse().join('');

}
// const result = ReverseStr2("Venkata Satya Surya Kumar");
// console.log(result);

//Method -3  spread operator like (...)
function ReverseStr3(str){
  return [...str].reverse().join('');
}
// const result = ReverseStr2("Venkata Satya Surya Kumar");
// console.log(result);

//Method- 4 Arrow function Using Single line excuted
const result = str => [...str].reverse().join('');
console.log(result("Venkata Satya Surya Kumar"));