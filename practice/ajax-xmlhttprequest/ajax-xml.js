'use strict';

const count = document.querySelector('#count'),
    result = document.querySelector('#result');

count.addEventListener('input', ()=>{
   const request = new XMLHttpRequest();
   request.open('GET', 'practice/ajax-xmlhttprequest/data.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send();

   request.addEventListener('load', ()=>{
      if(request.status === 200){
          console.log(request.response);
          const response = JSON.parse(request.response);
          result.value = (count.value / response.currency.usd).toFixed(2);
      }
   });
});