// How to calculate time complexity array Methods
const arr = ["a","b","c","d"]

//1) Find Index Value
console.log(arr[2])  // 2-Index Position, 
//Output: c          // O(1) - Time Complexity  

//2) push() method
arr.push("e"); // Insert Last Index Position
console.log(arr); // O(1) - Time Complexity
//Output: [ 'a', 'b', 'c', 'd', 'e' ]

//3) unshift() method
arr.unshift("x"); // Insert Starting Index Position
console.log(arr); // O(n) - Time Complexity
//Output : [ 'x', 'a', 'b', 'c', 'd', 'e' ]

//4) pop() Method
arr.pop(); // Remove the Last index of array
console.log(arr); // O(1) - Time Complexity
//Output : [ 'x', 'a', 'b', 'c', 'd' ]

//5) splice() insert methods
arr.splice(2,0,"Kumar"); // Insert New String at after 2nd index position
console.log(arr); // O(n) - Time Complexity
//Output : [ 'x', 'a', 'Kumar', 'b', 'c', 'd' ]

