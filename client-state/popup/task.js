const modal = document.getElementById('subscribe-modal')
const modalClose = modal.querySelector('.modal__close')
modal.classList.add('modal_active')

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active')
})