'use strict';

function showFirstMessage(message){
    console.log(message);
}

showFirstMessage('my message');

function calc(a, b){
    return(a + b);
}

console.log(calc(10, 6));
console.log(calc(4, 6));

function ret(){
    let num = 50;
    return(num);
}

const anotherNum = ret();
console.log(`return local from function: ${anotherNum}`);

const logger = function(){
    console.log('hello');
};

logger();

const calc1 = (a, b) => {
    return a + b;
};