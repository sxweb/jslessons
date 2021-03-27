!function(){"use strict";function e(e,t){const o=document.querySelector(e);o.classList.add("show"),o.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}function t(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}var o=function(o,n,s){const a=document.querySelectorAll(n),c=document.querySelector(o);c.addEventListener("click",(e=>{e.target!=c&&""!=e.target.getAttribute("data-modalClose")||t(o)})),a.forEach((t=>{t.addEventListener("click",(()=>e(o,s)))})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,s),window.removeEventListener("scroll",t))}))},n=function(o,n){const s=document.querySelectorAll(o);function a(o){t("[data-modal]");const s=document.querySelector(".modal__dialog");s.classList.add("hide");const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n        <div class="modal__content">\n            <div data-modalclose="" class="modal__close">×</div>\n            <div class="modal__title">${o}</div>\n            \n        </div>\n    `,document.querySelector(".modal").append(a),e("[data-modal]",n),setTimeout((()=>{a.remove(),s.classList.remove("hide"),t("[data-modal]")}),4e3)}s.forEach((e=>{!function(e){e.addEventListener("submit",(t=>{t.preventDefault();const o=new FormData(e),n=document.createElement("img");n.src="img/forms/spinner.svg",n.style.margin="0 auto",n.style.display="block",n.style.height="50px",n.style.width="50px",n.style.color="#000",e.insertAdjacentElement("afterend",n);const s={};o.forEach(((e,t)=>{s[t]=e})),(async(e,t)=>{const o=await fetch(" http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await o.json()})(0,JSON.stringify(s)).then((e=>{a("You sent a letter"),n.remove(),console.log(e)})).catch((()=>{a("Some error")})).finally((()=>{e.reset()}))}))}(e)}))};function s(e){return e<10&&(e=`0${e}`),e}window.addEventListener("DOMContentLoaded",(()=>{const e=setTimeout((()=>o("[data-modal]",e)),5e4);(function(e,t,o){const n=document.querySelectorAll(e),s=document.querySelectorAll(t);function a(e){e.forEach((e=>{e.classList.remove("show","fade"),e.classList.add("hide")}))}function c(e=0){n[e].classList.remove("hide"),n[e].classList.add("show","fade")}document.addEventListener("click",(e=>{e.target&&e.target.classList.contains(t.slice(1))&&(s.forEach(((t,s)=>{t.classList.remove(o.slice(1)),e.target==t&&(a(n),c(s))})),e.target.classList.add(o.slice(1)))})),a(n),c()})(".tabcontent",".tabheader__item",".tabheader__item_active"),o("[data-modal]","[data-contacts]",e),function(){const e=document.querySelector(".calculating__result span");let t,o,n,s="female",a=1.35;function c(e,t){document.querySelectorAll(`${e} div`).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function r(){e.textContent=s&&t&&o&&n&&a?"female"===s?Math.round((447.6+9.2*o+3.1*t-4.3*n)*a):Math.round((88.36+13.4*o+4.8*t-5.7*n)*a):"___"}function i(e,t){const o=document.querySelectorAll(`${e} div`);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",e.target.getAttribute("data-ratio"))):(s=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(t)})),e.target.classList.add(t),r()}))}))}function l(e){const s=document.querySelector(e);s.addEventListener("input",(()=>{switch(s.value.match(/\D/g)?s.style.border="1px solid red":s.style.border="none",s.getAttribute("id")){case"height":t=+s.value;break;case"weight":o=+s.value;break;case"age":n=+s.value}r()}))}a=localStorage.getItem("ratio")?localStorage.getItem("ratio"):1.35,s=localStorage.getItem("sex")?localStorage.getItem("sex"):"female",c("#gender","calculating__choose-item_active"),c(".calculating__choose_big","calculating__choose-item_active"),r(),i("#gender","calculating__choose-item_active"),i(".calculating__choose_big","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(){class e{constructor(e,t,o,n,s,...a){this.image=e,this.subTitle=t,this.description=o,this.price=n,this.parent=document.querySelector(`${s}`),this.classes=a}showCard(){const e=document.createElement("div");this.classes.length>=0?this.classes.forEach((t=>{e.classList.add(t)})):e.classList.add("menu__item"),e.innerHTML=`<img src="${this.image}" alt="vegy">`,e.innerHTML+=`<h3 class="menu__item-subtitle">${this.subTitle}</h3>`,e.innerHTML+=`<div class="menu__item-descr">${this.description}</div>`,e.innerHTML+='<div class="menu__item-divider"></div>',e.innerHTML+=`<div class="menu__item-price">\n        <div class="menu__item-cost">Цена:</div>\n        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n    </div>`,this.parent.append(e)}}axios.get("http://localhost:3000/menu").then((t=>{t.data.forEach((({img:t,title:o,descr:n,price:s})=>{new e(t,o,n,s*=74,".menu__field .container","menu__item").showCard()}))}))}(),n("form",e),function(e,t,o,n,a){function c(e,s,c,r){document.querySelector(t).innerHTML=e,document.querySelector(o).innerHTML=s,document.querySelector(n).innerHTML=c,document.querySelector(a).innerHTML=r}function r(e){return Date.parse(e)-Date.parse(new Date)}function i(e){return{days:s(Math.floor(e/864e5)),hours:s(Math.floor(e%864e5/36e5)),minutes:s(Math.floor(e%864e5%36e5/6e4)),seconds:s(Math.floor(e%864e5%36e5%6e4/1e3))}}if(r(e)>0){const t=i(r(e));c(t.days,t.hours,t.minutes,t.seconds),function(){const t=setInterval((()=>{if(r(e)>=0){const t=i(r(e));c(t.days,t.hours,t.minutes,t.seconds)}else clearInterval(t)}),1e3)}()}else c("00","00","00","00")}("2021-07-01T10:18:22","#days","#hours","#minutes","#seconds"),function({slide:e,countText:t,currentText:o,field:n,wrapper:a,sliderCont:c,nextArrow:r,prevArrow:i,arrowCont:l,activeDotClass:d}){let u=0,m=document.querySelectorAll(e);const h=m.length,f=document.querySelector(t),g=document.querySelector(o),_=document.querySelector(n),v=document.querySelector(a),y=window.getComputedStyle(v,null).width,L=document.querySelector(c);function p(e){const t=e*+y.slice(0,y.length-2)+"px";console.log(y.replace(/\w/gi,"")),_.style.transform=`translateX(-${t})`}function w(){let e=u+1;e=s(u+1),g.innerText=e}w(),f.textContent=s(h),_.style.display="flex",_.style.transition="0.5s",_.style.width=100*h+"%",v.style.overflow="hidden",m.forEach((e=>{e.style.width=y})),document.querySelector(l).addEventListener("click",(e=>{e.target.classList.contains(r)?(console.log(e.target.getAttribute("data-dot")),u<h-1?u++:u=0):e.target.classList.contains(i)&&(u>0?u--:u=m.length-1),E(u),p(u),w()}));const S=document.createElement("div");function E(e){document.querySelectorAll(".dot-container .dot").forEach((t=>{+t.getAttribute("data-dot")!==e?t.classList.remove(d):t.classList.add(d)}))}S.classList.add("dot-container"),L.append(S),m.forEach(((e,t)=>{!function(e,t){const o=document.createElement("span");o.classList.add("dot"),o.setAttribute("data-dot",e),t.append(o)}(t,S)})),S.addEventListener("click",(e=>{const t=+e.target.getAttribute("data-dot");p(t),E(t),u=t,w()})),p(u),E(u),w()}({slide:".offer__slide",countText:".offer__slider-counter #total",currentText:".offer__slider-counter #current",field:".offer__slider-inner",wrapper:".offer__slider-wrapper",sliderCont:".offer__slider",nextArrow:"offer__slider-next",prevArrow:"offer__slider-prev",activeDotClass:"active",arrowCont:".offer__slider-counter"})}))}();
//# sourceMappingURL=bundle.js.map