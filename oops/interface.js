var Player = function(name,type){
    this.name = name;
    this.type = type;
}
Player.prototype.introduce = function(){
    console.log(`Hi!, I am a ${this.name}, I am a ${this.type}`);
}

const Wizard1 = new Player('Kumar','Technical Lead');
const Wizard2 = new Player('Satya','Senior Software');

const res = Wizard1.play = function(){
    console.log(`Weeee I'm a ${this.type}`);
}
Wizard1.introduce();
// Wizard2.play = function(){
//     console.log(`Weeee I'm a ${this.type}`);
// }