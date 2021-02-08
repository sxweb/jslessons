'use strict';

/*console.log('звпрос данных...');

setTimeout(()=>{
    console.log('проверка данных');

    const product = {
        name: 'something',
        count: 45,
        price: 4532
    }

    setTimeout(()=>{
        product.status = 'order';
        console.log(product);
    }, 2000)
}, 2000);*/

console.log('звпрос данных...');
const req = new Promise(function (resolve, reject){
    setTimeout(()=>{
        console.log('проверка данных');

        const product = {
            name: 'something',
            count: 45,
            price: 4532
        };
        resolve(product);

    }, 2000);
});
req.then((product)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data =>{
    data.modify = true;
    return data;
}).then((data)=>{
    console.log(data);
});
