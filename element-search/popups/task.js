const main = document.getElementById('modal_main');
const close = document.querySelectorAll('modal__close');
const success = document.getElementById('modal_success');
const modal = document.querySelector('modal');

main.classList.add('modal_active');


main.onclick = function () {
    
    success.classList.add('modal_active');
    
    main.style.display = 'none';

}
