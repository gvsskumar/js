// This Keys Using Traditional & Arrow Function
//Task-1
function Fun1(){
    console.log(this); // It is display Global Window Object
}
Fun1();  

// Task 2
const items = {
    title:"Ball",
    getItem(){
        console.log("this",this); // this { title: 'Ball', getItem: [Function: getItem] }
    },
};
items.getItem();

// Task 3
class Item {
    title = "Ball";
    getItem(){
        console.log("this",this); //this Item { title: 'Ball' }
    }
}
const item = new Item();
item.getItem();

// // Task 4
class Item1 {
    title = "Ball";
    getItem(){
        function someFn(){
            console.log("this",this); //undefined 
        } 
        someFn();        
    }
}
const item1 = new Item1();
item1.getItem();

// Task 5
class Item2 {
    title = "Ball";
    getItem(){
        [1,2,3].map((item)=>{
            console.log(this); // Item2 { title: 'Ball' } 3 times repeated
        });     
    }
}
const item2 = new Item2();
item2.getItem();

// Task 6

class Item3 {
    title = "Ball";
    getItem(){
        [1,2,3].map(function(item){
            console.log(this); // undefined 3 times repeated
        });     
    }
}
const item3 = new Item3();
item3.getItem();