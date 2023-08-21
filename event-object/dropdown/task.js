const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropItem = dropList.querySelectorAll('.dropdown__item');

const findItem =  dropItem.forEach(item => 
    item.addEventListener('click', (event) => {
       event.preventDefault()
       dropValue.textContent = item.textContent
       dropList.classList.remove('dropdown__list_active')
   })
)

dropValue.addEventListener('click', () => {
    dropList.classList.toggle('dropdown__list_active')
    findItem()
   })


    
    

