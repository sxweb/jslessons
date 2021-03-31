'use strict';

function* generator(){
    yield 's';
    yield 'n';
    yield 'j';
    yield 'm';
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);

function* count(n){
    for(let i = 0; i < n; i++){
        yield i;
    }
}

//const counter = count(7);
//console.log(counter.next());

for(let k of count(7)){
    console.log(k);
}