window.addEventListener('DOMContentLoaded', () => {

    const mailCopyLink = document.querySelector('.menu__item_mail'),
          mailCopyBtn = document.querySelector('.mail-copy'),
          telBtn = document.querySelector('.menu__item_tel'),
          callbackWindow = document.querySelector('.menu__form'),
          closeCallback = document.querySelector('.menu__form__close'),
          overlay = document.querySelector('.overlay'),
          copyText = document.querySelector('.mail-copy');


        mailCopyLink.addEventListener('click', () => {
            mailCopyBtn.style.display = 'block';
            mailCopyLink.style.backgroundColor = '#5db975';
        });

        telBtn.addEventListener('mouseover', ()=> {
            callbackWindow.style.display = 'flex';
            telBtn.style.backgroundColor = '#5db975';
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeCallback.addEventListener('click', ()=> {
            callbackWindow.style.display = 'none';
            overlay.style.display = 'none';
            telBtn.style.backgroundColor = '#34a853';
            document.body.style.overflow = '';
        });



});