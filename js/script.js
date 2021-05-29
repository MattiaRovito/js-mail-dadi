// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1 generare un numero random da 1 a 6 per due giocatori

// 2 Stabilire il vincitore in base al numero più alto


var giocatore1 = Math.floor(Math.random () * 6) + 1;
// console.log('giocatore1', giocatore1)

var giocatore2 = Math.floor(Math.random () * 6) + 1;
// console.log('giocatore2', giocatore2)

document.getElementById('numero1').innerHTML = giocatore1
document.getElementById('numero2').innerHTML = giocatore2

var vincente = 'Oh noo, hanno pareggiato!'

if (giocatore1 > giocatore2){
    vincente = 'Il giocatore 1 ha vinto!!!!'
} else if (giocatore1 < giocatore2){
    vincente = 'Il giocatore 2 ha vinto!!!!'
}


document.getElementById('vincitore').innerHTML = vincente;