const tutorial= require('./tutorial.js');
console.log(tutorial.sum(1,1));
console.log(tutorial);
console.log(new tutorial.somemathObject());
// Events
const EventEmitter = require('events');
const eventemmitter= new EventEmitter();
eventemmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});
// Emitting an event
eventemmitter.emit('tutorial',1,2);
// Adding a listener 
eventemmitter.on('tutorial1',()=>{
    console.log("tutorial1 event has occured");
});
eventemmitter.emit('tutorial1');
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
let pedro = new Person('Pedro');

pedro.on('name',()=>{
    console.log('my name is '+pedro.name);

})
pedro.emit('name');