import {addZero} from './timer';

function slider(slide, countText, currentText, field, wrapper, sliderCont, nextArrow, prevArrow, activeDotClass){

//slider

    let current = 0;
    let slides = document.querySelectorAll(slide);
    const slidesCount = slides.length;
    const slidesCountText = document.querySelector(countText);
    const currentSlideText = document.querySelector(currentText),
        sliderInner = document.querySelector(field),
        sliderWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(sliderWrapper, null).width,
        slider = document.querySelector(sliderCont);

    updateSliderCounter();
    slidesCountText.textContent = addZero(slidesCount);
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s';
    sliderInner.style.width = 100 * slidesCount + '%';
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });


    const sliderButtons = document.querySelector('.offer__slider-counter');
    sliderButtons.addEventListener('click', (e)=>{
        if(e.target.classList.contains(nextArrow)){
            console.log(e.target.getAttribute('data-dot'));
            incrementSliderCounter();
        }else if(e.target.classList.contains(prevArrow)){
            decrementSliderCounter();
        }
        setActiveDot(current);
        showSlide(current);
        updateSliderCounter();
    });
    function showSlide(ind){
        const offset = ind * +width.slice(0, width.length - 2)+ 'px';
        const reg = /\w/ig;
        console.log(width.replace(reg, ''));
        sliderInner.style.transform = `translateX(-${offset})`;
    }
    function incrementSliderCounter(){
        if(current < slidesCount - 1){
            current++;
        }else{
            current = 0;
        }
    }
    function decrementSliderCounter(){
        if(current > 0){
            current --;
        }else{
            current = slides.length - 1;
        }
    }
    function updateSliderCounter(){
        let currentText = current + 1;
        currentText = addZero(current + 1);
        currentSlideText.innerText = currentText;
    }
    function createDot(ind, parent){
        const span = document.createElement('span');
        span.classList.add('dot');
        span.setAttribute('data-dot', ind);
        parent.append(span);
    }

    const dotContainer = document.createElement('div');
    dotContainer.classList.add('dot-container');
    slider.append(dotContainer);

    slides.forEach((slide, ind) =>{
        createDot(ind, dotContainer);
    });

    dotContainer.addEventListener('click', (e)=>{
        const ind = +e.target.getAttribute('data-dot');
        showSlide(ind);
        setActiveDot(ind);

    });

    function setActiveDot(ind){
        const dots = document.querySelectorAll('.dot-container .dot');
        dots.forEach(dot =>{
            if(+dot.getAttribute('data-dot') !== ind){
                dot.classList.remove(activeDotClass);
            }else{
                dot.classList.add(activeDotClass);
            }
        });
    }
    showSlide(current);
    setActiveDot(current);
    updateSliderCounter();

}

export default slider;