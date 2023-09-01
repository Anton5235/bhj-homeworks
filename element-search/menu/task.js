const menuItems = document.querySelectorAll('.menu__item');

for(let menuItem of menuItems) {
  menuItem.onclick = onMenuItemClick
}

function onMenuItemClick(event) {
  if(subMenu != null){
  const subMenu = this.querySelector('.menu_sub');
  event.preventDefault() 

  subMenu.classList.toggle('menu_active');
  }
}
