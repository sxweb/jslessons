function cards(){

//cards using classes

    class Card{
        constructor(image, subTitle, description, price, parent, ...classes){
            this.image = image;
            this.subTitle = subTitle;
            this.description = description;
            this.price = price;
            this.parent = document.querySelector(`${parent}`);
            this.classes = classes;
        }

        showCard(){
            const divContainer = document.createElement('div');
            if(this.classes.length >= 0){
                this.classes.forEach((className) =>{
                    divContainer.classList.add(className);
                });
            }else{
                divContainer.classList.add('menu__item');
            }

            divContainer.innerHTML = `<img src="${this.image}" alt="vegy">`;
            divContainer.innerHTML += `<h3 class="menu__item-subtitle">${this.subTitle}</h3>`;
            divContainer.innerHTML += `<div class="menu__item-descr">${this.description}</div>`;
            divContainer.innerHTML += `<div class="menu__item-divider"></div>`;
            divContainer.innerHTML += `<div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    </div>`;
            this.parent.append(divContainer);
        }
    }

    const getData = async (url) =>{
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    axios.get('http://localhost:3000/menu')
        .then(result =>{
            result.data.forEach(({img, title, descr, price}) => {
                price = price*74;
                new Card(img, title, descr, price, '.menu__field .container', 'menu__item').showCard();
            });
        });


}

module.exports = cards;