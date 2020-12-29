'use strict';

const firstObject = {
    name: 'someObject',
    a:1,
    b: 2,
    c: {
        x: 5,
        y: 10
    },
    makeMessage: function(){
        console.log('some message');
    }
};
//test copy object by link
/*const newObject = firstObject;
newObject.a = 10;
console.log(newObject);
console.log(firstObject);*/

function copyObject(obj){
    let newObj = {};
    for(let value in obj){
        newObj[value] = obj[value];
    }
    return newObj;
}

const newObject = copyObject(firstObject);
newObject.a = 45;
console.log(newObject);
console.log(firstObject);

const obj = {
    a:12,
    b:45,
    c:0
};
const add = {
    d:15,
    f:0
};
Object.assign(obj, add);
console.log(obj);

const oldArray = [45, 78];
const newArray = oldArray.slice();
newArray[0] = 4;
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal'];
const internet = [...video, ...blogs, 'vk'];
console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const nums = [45, 5, 7];
log(...nums);

const someArray = [56, 452];
const newSomeArray = [...someArray];
console.log(newSomeArray);

const firstTestObj = {
    a: 45,
    b: 65
}
const secondTestObject = {...firstObject};
console.log(secondTestObject);
