'use strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('hello');
    }
}

const john = {
    health: 100
};
//deprecated approach
/*john.__proto__ = soldier;
john.sayHello();*/

Object.setPrototypeOf(john, soldier);
//john.sayHello();

const yuriy = Object.create(soldier);
yuriy.sayHello();
