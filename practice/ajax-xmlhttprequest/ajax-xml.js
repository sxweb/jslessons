'use strict';

const count = document.querySelector('#count'),
    result = document.querySelector('#result');

count.addEventListener('input', ()=>{
    
    const request = new XMLHttpRequest();
    request.open('GET', 'practice/ajax-xmlhttprequest/data.json');
    request.setRequestHeader('Content-type', 'application/ajax; charset=utf-8');
    request.send();

    request.addEventListener('load', ()=>{
        const response = JSON.parse(request.response);
        console.log(response.currency.usd);
        if(request.status === 200){
            result.value = (count.value / response.currency.usd).toFixed(2);
        }else{
            result.value = 'something wrong';
        }
    });

});