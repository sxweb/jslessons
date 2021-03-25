function  showModal(modalSelector, modalTimerId){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if(modalTimerId){
        clearInterval(modalTimerId);
    }
    
}

function hideModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(modalSelector, modalTrigger, modalTimerId){

//modal

    const contactsButtons = document.querySelectorAll(modalTrigger);
    const modal = document.querySelector(modalSelector);



    modal.addEventListener('click', (e)=>{
        if(e.target == modal || e.target.getAttribute('data-modalClose') == ''){
            hideModal(modalSelector);
        }
    });

    contactsButtons.forEach((item)=>{
        item.addEventListener('click', ()=> showModal(modalSelector, modalTimerId));
    });
    

    

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll(){
        if(window.pageYOffset +document.documentElement.clientHeight >=  document.documentElement.scrollHeight){
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

}

export default modal;
export {showModal};
export {hideModal};