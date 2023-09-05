// How to create custom Array
class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    //Get Methods
    get(index){
        return this.data[index];
    }
    //Push Item 
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    //Pop Last Item
    pop(){
       const lastItem = this.data[this.length-1];
       delete this.data[this.length-1];
       this.length--;
       return lastItem;  
    }
    delete(index){
        const item = this.data[index]; 
        this.shiftItem(index);
        return item;
    }
    
    shiftItem(index){
        for(let i=index;i<this.length;i++){
            this.data[i] = this.data[i+1];
            
        }
        delete this.data[this.length-1];
    }

    
}
const newArray = new MyArray();
newArray.get(0);
console.log(newArray);
newArray.push("Kumar");
newArray.push("Kiran");
newArray.push("Satya");
newArray.push("Venkata");
newArray.push("Surya");
console.log(newArray);
newArray.delete(2);
console.log(newArray);
