
     const dead = document.getElementById("dead");
     const lost = document.getElementById("lost");
    
    for(let i = 1; i < 10; i++) {
        const getHole = document.getElementById(`hole${i}`);
        getHole.onclick = () => {
            if(getHole.className.includes( 'hole_has-mole' )) {
                dead.textContent++;
            }else{
                lost.textContent++;
            }
        
    
    if(dead.textContent === '5') {
        alert('You Win!!!');
        dead.textContent = 0;
        lost.textContent = 0;
    } else if(lost.textContent === '5') {
        alert('You Loose!!!');
        dead.textContent = 0;
        lost.textContent = 0;
    }
}
}
     
