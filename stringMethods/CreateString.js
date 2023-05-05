let str1 = "Welcome to Sunglobal Techs";
let str2 = 'Hello World';
let str3 = `This is Sample Javascript`

// Constructor Strings
let str4 = new String("Technical Lead");
console.log(str4);

const str5 = new String("Hello world"); 
console.log(a);  // "Hello world"
console.log(a instanceof String); //  true
console.log(typeof a);  // "object"

const str6 = String("Hello world"); 
console.log(b); // "Hello world"
console.log(b instanceof String); // false
console.log(typeof b); // "string"

// CharAt Position based charactor
let str7 = "Surya Kumar";
console.log(str7.charAt(0)); // S
// Conditional Statement
let a = "a";
let b = "b";
if(a>b){
console.log(`${a} is less than ${b}`)
}else if(b>a){
    console.log(`${a} is greater than ${b}`)
}
// Case Sensitive
const areEqualInUpperCase = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss")); // true; should be false
console.log(areEqualInLowerCase("ı", "I")); // false; should be true

//  Check With eval  
let s1 = "2+2";
console.log(s1); // "2+2"
console.log(eval(s1));  // 4  Note : using eval function

let s2 = new String("2+2");
console.log(s2);  //"2+2"
console.log(eval(s2)); //"2+2"   Note: Using String Constructor function
console.log(eval(s2.valueOf())); // 4  Note: eval of using valueOf() function

//String Method 
//1) String.fromCharCode(keyValue)
let s3 = String.fromCharCode(65, 66, 67); 
console.log(s3)  // returns "ABC";

// Using String() to stringify a symbol
const sym = Symbol("example");
console.log(`${sym}`); // TypeError: Cannot convert a Symbol value to a string
console.log("" + sym); // TypeError: Cannot convert a Symbol value to a string
console.log("".concat(sym)); // TypeError: Cannot convert a Symbol value to a string

//2) String.length;
const strLen = 'SunGlobalTechs';
console.log(`${strLen} : ${strLen.length}`); // "SunGlobalTechs : 14"

//3) String.prototype[@@iterator]()

const str = 'The Sunglobal Techs.';
const iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
	console.log(`result : ${JSON.stringify(result)}`)
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}
// Output Iterable each charactor, Note : Each Iterator return 2 property "Value" , "done", Once done:true all itration are completed
/*> 'result : {"value":"T","done":false}'
> "T"
> 'result : {"value":"h","done":false}'
> "h"
> 'result : {"value":"e","done":false}'
> "e"
> 'result : {"value":" ","done":false}'
> " "
> 'result : {"value":"S","done":false}'
> "S"
> 'result : {"value":"u","done":false}'
> "u"
> 'result : {"value":"n","done":false}'
> "n"
> 'result : {"value":"g","done":false}'
> "g"
> 'result : {"value":"l","done":false}'
> "l"
> 'result : {"value":"o","done":false}'
> "o"
> 'result : {"value":"b","done":false}'
> "b"
> 'result : {"value":"a","done":false}'
> "a"
> 'result : {"value":"l","done":false}'
> "l"
> 'result : {"value":" ","done":false}'
> " "
> 'result : {"value":"T","done":false}'
> "T"
> 'result : {"value":"e","done":false}'
> "e"
> 'result : {"value":"c","done":false}'
> "c"
> 'result : {"value":"h","done":false}'
> "h"
> 'result : {"value":"s","done":false}'
> "s"
> 'result : {"value":".","done":false}'
> "."
> 'result : {"done":true}' */

//4) String.prototype.at() Note: Posive (+ve index calculate Left => Right). Negative(-Ve index calculate Right => Left) 
const sentence = 'Sunglobal Techs';
let index = 3;
console.log(`Index of ${index} the character returned is ${sentence.at(index)}`);
// Output : "Index of 3 the character returned is g",
index = -4;
console.log(`Index of ${index} the character returned is ${sentence.at(index)}`);
//"Index of -4 the character returned is e"

//5) String.prototype.charAt(), Note: charAt did not taken negative(-ve) index positions  
const sentence1 = 'Sunglobal Techs';
let index1 = 3;
console.log(`Index of ${index} the character returned is ${sentence1.charAt(index1)}`);
// Output : "Index of 3 the character returned is g",
index = -4;
console.log(`Index of ${index} the character returned is ${sentence1.charAt(index1)}`);
//"Index of -4 the character returned is " (didnot take any charactor)

//6) String.prototype.charCodeAt() : 
//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
const sentence4 = 'Sunglobal Techs';
const index4 = 3;
console.log(`The character code ${sentence4.charCodeAt(index4)} is equal to ${sentence4.charAt(index4)}`);
// Expected output: "The character code 103 is equal to g"

//7) String.prototype.concat()
const str8 = 'Hello';
const str9 = 'World';
console.log(str8.concat(' ', str9));
// Expected output: "Hello World"
console.log(str9.concat(', ', str8));
// Expected output: "World, Hello"

//8) String.prototype.endsWith() // endsWith(searchString), endsWith(searchString, endPosition)
const str10 = 'Cats are the best!';
console.log(str10.endsWith('best!'));
// Expected output: true
console.log(str10.endsWith('best', 17));
// Expected output: true
const str11 = 'Is this a question?';
console.log(str11.endsWith('question'));
// Expected output: false

//9) String.prototype.includes() , returning true or false as appropriate
const sentence5 = 'The Sun Global Techs';
const word = 'Sun';
console.log(`The word "${word}" ${sentence5.includes(word) ? 'is' : 'is not'} Content`);
//output : 'The word "Sun" is Content'

//10) String.prototype.indexOf() , Note : index of charactor did not match retur -1, otherwise displayed index position displayed
const paragraph = 'The SunGlobal Techs';
const searchTerm = 'Sun';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(` "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: ' "Sun" from the beginning is 4'

const searchTerm1 = 'sun';  
const indexOfFirst1 = paragraph1.indexOf(searchTerm1);
console.log(` "${searchTerm1}" from the beginning is ${indexOfFirst1}`);
// Expected output: ' "Sun" from the beginning is -1'

//11) String.prototype.lastIndexOf()

const paragraph2 = 'The Sun Global Techs sun Global Tech Sun Global Techs sun Global';
const searchTerm2 = 'sun';
console.log(` "${searchTerm}" from the end is ${paragraph2.lastIndexOf(searchTerm2)}`);
// Expected output: ' "sun" from the end is 54'

const paragraph3 = 'The Sun Global Techs sun Global Tech Sun Global Techs sun Global';
const searchTerm3 = 'Sun';
console.log(` "${searchTerm}" from the end is ${paragraph3.lastIndexOf(searchTerm3)}`);
// Expected output: ' "Sun" from the end is 37'

//12) String.prototype.match() 
const paragraph4 = 'The SunGlobal Techs';
const regex = /[A-Z]/g;
const found = paragraph4.match(regex);
console.log(found);
// Expected output: Array ["T", "S", "G", "T"]

//13) String.prototype.toUpperCase()
const sentence6 = 'the sunglobaltechs';
console.log(sentence6.toUpperCase());
// Expected output: > "THE SUNGLOBALTECHS"
//13) String.prototype.toLowerCase()
const sentence7 = 'THE SUNGLOBALTECHS';
console.log(sentence7.toLowerCase());
// Expected output: > "the sunglobaltechs"
//14) String.prototype.toString()
const stringObj = new String('foo');
console.log(stringObj);             // Expected output: String { "foo" }
console.log(stringObj.toString());  // Expected output: "foo"
console.log(stringObj.valueOf());   // Expected output: "foo"

//15) String.prototype.substring()
const strSub = 'TheSunGlobalTechs';
console.log(strSub.substring(3,12));
// Expected output: "SunGlobal"
console.log(strSub.substring(3));
// Expected output: "SunGlobalTechs"

// The substring() method returns the part of the string from the start index up to and excluding the end index
// The two parameters of substr() are start and length, while for substring(), they are start and end.
// substr() method can handle negative indexes.
// substring() method cannot handle negative indexes.

// 16) String.prototype.slice() // Syntax : slice(indexStart)  ,slice(indexStart, indexEnd)
//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
const strSlice = 'SunGlobalTechs';
console.log(strSlice.slice(3));
// Expected output: "GlobalTechs"
console.log(strSlice.slice(3, 8));
// Expected output: "Globa"
console.log(strSlice.slice(-3));
// Expected output: "chs"
console.log(strSlice.slice(-6, -3));
// Expected output: "lTe"

//17) String.prototype.split()
//The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const strSplit = 'The Sun Global Tech';
const words1 = strSplit.split(' ');
console.log(words1);
// Expected output: Array ["The", "Sun", "Global", "Tech"]

const words2 = strSplit.split('');
console.log(words2);
//Expected output: Array ["T", "h", "e", " ", "S", "u", "n", " ", "G", "l", "o", "b", "a", "l", " ", "T", "e", "c", "h"]

const words3 = strSplit.split();
console.log(words3);
//Expected output: Array ["The Sun Global Tech"]







