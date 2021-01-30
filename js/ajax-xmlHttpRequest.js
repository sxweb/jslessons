'use strict';
const count = document.querySelector('#count'),
    result = document.querySelector('#result');

count.addEventListener('input', () => {
   const request = new XMLHttpRequest();

   request.open('GET', 'json/currency.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send();

   /*request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200){

          const currencyValue = JSON.parse(request.response);
          result.value = (+count.value / currencyValue.currency.usd).toFixed(2);
      }else{
            result.value = 'something wrong';
        }
   });*/
    request.addEventListener('load', () => {
        if(request.status === 200){

            const currencyValue = JSON.parse(request.response);
            result.value = (+count.value / currencyValue.currency.usd).toFixed(2);
        }else{
            result.value = 'something wrong';
        }
    });
});