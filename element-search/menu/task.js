const menuItems = document.querySelectorAll('.menu__item');

for(let menuItem of menuItems) {
  menuItem.onclick = onMenuItemClick
}

function onMenuItemClick(event) {
  const subMenu = this.querySelector('.menu_sub');
  if (subMenu == null) return
  
  event.preventDefault() 

  subMenu.classList.toggle('menu_active');
}
