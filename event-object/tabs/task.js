const tabs = document.querySelector('.tabs');
const tab = tabs.querySelectorAll('.tab');
const tabContent = tabs.querySelectorAll('.tab__content');

tab.forEach((item, index) => {
    item.addEventListener('click', () => {
        tab.forEach(item => item.classList.remove('tab_active'));
        tabContent.forEach(content => content.classList.remove('tab__content_active'));
        item.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');

    });
});

  



