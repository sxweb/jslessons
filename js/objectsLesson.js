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

