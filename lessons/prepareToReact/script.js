
const someObj = {
    number: 5,
    saySomething: function(){
        function say(){
            console.log(this);
        }

        say();
    }
}

someObj.saySomething(); // will print a window obj, to print a parent obj we need to use an arrow function
const someObj1 = {
    number: 5,
    saySomething: function(){
        const say = ()=>{
            console.log(this);
        }

        say();
    }
}

someObj1.saySomething();

let names = ["Joe", "Jannie", "Tom", "Daniel"];
const shortNames = names.filter((name)=>{
    return name.length < 5;
});

console.log(shortNames);

names = names.map(name => name.toLocaleLowerCase());
console.log(names);

//rest and spread operators

function maxNumber(a, b, ...numbers){
    console.log(numbers);
}
maxNumber(5, 45, 4, 78);

const arr1 = [45, 2, 65],
      arr2 = [56, 987];

const res = Math.max(...arr1, ...arr2, 5000);
console.log(res);

//spread for objects

const user = {
    name: "Yuriy",
    pass: 4578,
    role: "user"
}

const admin = {
    name: "adm",
    pass: 452548,
}

const res1 = {...user, ...admin};
console.log(res1);

//new sintaxys for objects

const x = 25, y = 45;

/*const oldSintax = {
    x: x,
    y: y,
    calc: function(){
        console.log(this.x * this.y);
    }
}*/

const simpleObject = {x, y,
    calc(){
        console.log(this.x * this.y);
    }
}
console.log(simpleObject);
simpleObject.calc();

//destruct

const newUser = {
    userName: "Yuriy",
    pass: 4578,
    role: "user"
}

const {userName, pass, role} = newUser;
console.log(userName);

function printVars({
    name = "admin",//we can use default values
    data = "simpleData",
    count = 0
} = {}){//and we can use default values for an object
    console.log(`${name}, ${data}, ${count}`);
}
printVars({
    data: "someData",
    name: "someName"
});
printVars();

//arrays destruct
const someArray = [45, 46, 78];
const [a, b, c] = someArray;
console.log(c);

const country = {
    name: "England",
    population: 4456464656546,
    gender:{
        male: ["15%", "40%"],
        female: ["16%", "45%"]
    }
}

const {gender:{male:[maleUNder18, maleUAdult], female:[femaleUnder18, femaleAdult]}} = country;
console.log(femaleUnder18);