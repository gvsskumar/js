class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi, my name is a ${this.name} , My role is a ${this.type}`);
    }
}
class Wizard extends Player{
    constructor(name,type){
        super(name,type);
    }

    play(){
     console.log(`Wlcome Message , ${this.name}`);
    }
}
const Wizard1 = new Wizard('Kumar','Technical Lead');
const Wizard2 = new Wizard('Satya','Senior Software');
Wizard1.introduce();