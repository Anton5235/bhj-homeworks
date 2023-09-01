let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    pollTitle.textContent = data.data.title;
    let button = document.createElement('button');
    data.data.answers.forEach(answer => {
        
      button.className = 'poll__answer';
      button.textContent = answer;
      button.addEventListener('click', () => {
        confirm('Спасибо, ваш голос засчитан!')
      });
     
    });
    pollAnswers.appendChild(button);
  });

