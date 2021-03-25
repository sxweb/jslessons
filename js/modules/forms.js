import {hideModal, showModal} from './modal';
import {postData} from '../services/services';
function forms(formSelector, modalTimerId){
    //forms

    const forms = document.querySelectorAll(formSelector);
    const status = {
        loading: 'img/forms/spinner.svg',
        sent: 'You sent a letter',
        error: 'Some error'
    };



    

    function bindPostData(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const data = new FormData(form);
            const message = document.createElement('img');
            message.src = status.loading;
            message.style.margin = '0 auto';
            message.style.display = 'block';
            message.style.height = '50px';
            message.style.width = '50px';
            message.style.color = '#000';
            form.insertAdjacentElement('afterend', message);
            const obj = {};
            data.forEach((value, key)=>{
                obj[key] = value;
            });
            postData(' http://localhost:3000/requests', JSON.stringify(obj))

                .then((data)=>{
                    showNotificationModal(status.sent);
                    message.remove();
                    console.log(data);
                }).catch(()=>{
                showNotificationModal(status.error);
            }).finally(()=>{
                form.reset();
            });
        });
    }

    forms.forEach((form)=>{
        bindPostData(form);
    });

    function showNotificationModal(message){
        hideModal('[data-modal]');
        const oldModal = document.querySelector('.modal__dialog');
        oldModal.classList.add('hide');
        const newModal = document.createElement('div');
        newModal.classList.add('modal__dialog');
        newModal.innerHTML = `
        <div class="modal__content">
            <div data-modalclose="" class="modal__close">×</div>
            <div class="modal__title">${message}</div>
            
        </div>
    `;
        document.querySelector('.modal').append(newModal);
        showModal('[data-modal]', modalTimerId);
        setTimeout(()=>{
            newModal.remove();
            oldModal.classList.remove('hide');
            hideModal('[data-modal]');
        }, 4000);

    }
}

export default forms;