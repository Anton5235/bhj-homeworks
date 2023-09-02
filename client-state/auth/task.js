const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
    })
    .then(response = response.JSON())
    .then(data =>{
        if(data.ok){
            
        }
    })
})
