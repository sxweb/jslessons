'use strict';

//with use strict it will return 'undefined', without use strict it will return  WINDOW
function someLoger(){
    console.log(this);
}
someLoger();

//it will return  object

const obj = {
    a:29,
    b:49,
    printThis: function(){
        console.log(this);
    }
};
obj.printThis();

//in function=constructor it will return object

function User(name, id){
    this.name = name;
    this.id = id;
    this.printThis = function(){
        console.log(this);
    };
}

const yuriy = new User('Yuriy', 45);
yuriy.printThis();