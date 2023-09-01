const menuItem = document.querySelectorAll('.menu__item');

menuItem.forEach(item => {
  const link = item.querySelector('.menu__link');
  const menuSub = item.querySelector('.menu_sub');
  link.addEventListener('click', (event) => {
    if (menuSub !== null) {
      event.preventDefault(); 
      menuSub.classList.toggle('menu_active'); 
    }
  })})