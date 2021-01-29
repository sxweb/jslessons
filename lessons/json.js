'use steict';

const person = {
    name: 'Yuriy',
    age: 35,
    parents: {
        mom: 'Elena',
        dad: 'Vasiliy'
    }
};

//console.log(JSON.stringify(person));
//console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'clone';

console.log(person);
console.log(clone);