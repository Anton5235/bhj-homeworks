const reveal = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
reveal.forEach(item => {
    const {top, bottom} = item.getBoundingClientRect()

    if (bottom > 0 && top < window.innerHeight ) {
        item.classList.add('reveal_active')
    }
})

})

