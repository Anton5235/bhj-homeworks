const dropList = document.querySelector('.dropdown__list');
const dropValue = document.querySelector('.dropdown__value');

dropValue.onclick = function () {

    dropList.classList.toggle('dropdown__list_active')
};
