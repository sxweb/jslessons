'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function(){
        console.log(this.name);
    }
};

const {border, background} = options.colors;
console.log(border);

console.log(options.makeTest());
//console.log(options.colors.background);

//delete options.name;
let counter = 0;
for (let key in options){
    if(typeof(options[key]) == 'object'){
        for(let objKey in options[key]){
            console.log(`object element with name ${objKey} has the following value: ${options[key][objKey]}`);
        }
    } else {
        console.log(`object element with name ${key} has the following value: ${options[key]}`);
    }
    counter++;
    
}

//console.log(options);
//console.log(counter);

console.log(Object.keys(options).length);

const simpleObject = {
    name: 'simpleObject',
    simpleMethod: function(){
        console.log('some simple method for training');
    }
};

console.log(Object.keys(simpleObject).length);


const Person = {
    firstName: 'Yuriy',
    secondName: 'Vozhagov',
    age: 35,
    hazWife: true,
    children: {
        son: 'Maxim'
    }
}

function printMyObject(obj){
    for(let key in obj){
        if(typeof(obj[key]) == 'object'){
            for(let innerKey in obj[key]){
                console.log(`The element name is: ${obj[innerKey]}, and his value is ${obj[key][innerKey]}`);
            }
        }else{
            console.log(`The element name is: ${key}, and his value is ${obj[key]}`);
        }
    }
}

printMyObject(Person);