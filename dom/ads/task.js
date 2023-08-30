const rotator = document.querySelectorAll('.rotator__case');
document.addEventListener('DOMContentLoaded', () => {
setInterval = (() => {
    rotator.forEach(item => {
        for(let i = item; item < Infinity; item++) {
            item.classList.add('rotator__case_active')
        }
    })
}, 1000)
})