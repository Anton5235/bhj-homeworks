const form = document.getElementById('form');
const progressBar = document.getElementById('progress');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) { 
        const progress = (event.loaded / event.total);
        progressBar.value = progress ;
    }
  };

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
  xhr.send(formData);
});