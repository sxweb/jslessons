'use strict';

const num = new Number(3); //old approuch, but we can
console.log(num);

const func = new Function();

//ES 5

function User(name, id){
    this.name = name;
    this.id = id;
    this.isHuman = true;
    //and we can add some methods to this function
    this.hello = function(){
        console.log(`Hello, ${this.name}`);
    };
}

const yuriy = new User('Yuriy', 15);
const alex = new User('Alex', 45);

//console.log(yuriy);
//console.log(alex);

yuriy.hello();

//also we can add some methods using prototype

User.prototype.exit = function(){
    console.log(`User ${this.name} left the system`);
};

yuriy.exit();