// Readline module
const readline= require('readline');
const rl=readline.createInterface({input:process.stdin,output:process.stdout});
let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);
let answer= num1+num2;
rl.question(`what is ${num1}+${num2}?\n`,(userinput)=>{
    console.log(userinput);
    if(userinput.trim()==answer){
    rl.close;
    }
    else{
        rl.setPrompt('Incorrect Response try again');
        rl.prompt();
        rl.on('line',(userinput)=>{
if(userinput.trim()==answer)
rl.close();
else
rl.setPrompt(`Your answer of ${userinput} is incorrect`);
rl.prompt();
        })
    }
});
rl.on('close',()=>{
    console.log('Correct');

})

