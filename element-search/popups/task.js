const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
const closer = document.querySelectorAll('.modal__close');

main.classList.add('modal_active');

const show = document.querySelector(".show-success");
    show.onclick = function() {
    main.classList.remove("modal_active");
    success.classList.add("modal_active");
    }
    closer.forEach(el => el.addEventListener("click",  function(e){ 
      this.closest('.modal').classList.remove("modal_active"); 
    }));
