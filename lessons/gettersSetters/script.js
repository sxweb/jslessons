'use strict';

const obj = {
    name: 'Yuriy',
    age: 35,

    get userAge(){
        return this.age;
    },

    set userAge(age){
        this.age = age;
    }
};

console.log(obj.userAge);
obj.userAge = 36;
console.log(obj.userAge);

function User(name, age){
    this.name = name;
    let userAge = age;

    this.printUser = function (){
        console.log(`name: ${this.name}, age: ${userAge}`);
    };

    this.getAge = function (){
        return userAge;
    };

    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            userAge = age;
        }else{
            console.log('some error');
        }
    };
}

const yuriy = new User('Yuriy', 35);
yuriy.printUser();
yuriy.setAge(36);
yuriy.printUser();

class User1{
    constructor(name, age){
        this.name = name;
        this._age = age;
    }

    #surname = 'vozhagov';

    printUser = () =>{
        console.log(`name: ${this.name}, age: ${this._age}, ${this.#surname}`);
    }

    get age(){
        return this._age;
    }

    set age(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        }else{
            console.log('some error');
        }
    }
    //homework start
    get userSurname(){
        return this.#surname;
    }

    set userSurname(value){
        if(typeof value === 'string'){
            this.#surname = value;
        }else{
            console.log('something wrong');
        }
    }
    //homework end
}

const yuriy1 = new User1('Yuriy', 35);
yuriy1.printUser();
yuriy1.age = 36;
yuriy1.printUser();

yuriy1.userSurname = 111;
yuriy1.userSurname = 'Vozhagov';
console.log(yuriy1.userSurname);

