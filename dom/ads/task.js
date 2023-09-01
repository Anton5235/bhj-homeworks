const rotator = document.querySelectorAll('.rotator');
rotator.forEach(item => {
    let counter = 0;
    const rotatorItem = item.querySelectorAll('.rotator__case');
    setInterval(() => {
        rotatorItem[counter].classList.remove('rotator__case_active');
        if(counter == rotatorItem.length - 1){
        counter = 0;
    } else {
        counter++;
    }
    rotatorItem[counter].classList.add('rotator__case_active');
}, 1000)
})
