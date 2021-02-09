'use strict';

console.log('initialization...');
const prom = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('first message');
        resolve();
    }, 2000);
}).then(()=>{
    setTimeout(()=>{
        console.log('second message');
    }, 2000);
});
