const bookControl = document.querySelector('.book__control')
const fontSize = document.querySelectorAll('.font-size');
const book = bookControl.querySelectorAll('.book')

fontSize.forEach((item, index) => {
   
    item.addEventListener('click', (event) => {
        event.preventDefault();
        fontSize.forEach(item => item.classList.remove('font-size_active'));
        book.forEach(item => item.classList.remove('font-size_active'));
        item.classList.add('font-size_active');
        
        
    })
})