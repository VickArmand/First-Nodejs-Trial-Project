console.log("Hello");
const PI= 3.14
class somemathObject{
    constructor(){
        console.log("Object created");
    }
   
}
const sum = (num1,num2)=> num1+num2;
module.exports.sum=sum;
module.exports.PI=PI;
module.exports.somemathObject=somemathObject
// The above scenario is similar to 
module.exports={sum:sum,PI:PI,somemathObject:somemathObject}
