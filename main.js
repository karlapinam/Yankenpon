let tijera1= document.getElementById('tijera1');
let papel1= document.getElementById('papel1');
let piedra1= document.getElementById('piedra1');
let tijera2= document.getElementById('tijera2');
let papel2= document.getElementById('papel2');
let piedra2= document.getElementById('piedra2');
let boton= document.getElementById('boton');
let resultado= document.getElementById('resultado');
let nada1= document.getElementById('nada1')
let nada2= document.getElementById('nada2')

const juego1 = () => {
    if (tijera1.checked && tijera2.checked || papel1.checked && papel2.checked || piedra1.checked && piedra2.checked) {
        return resultado.innerHTML = 'Empate'
    } else if  (tijera1.checked && papel2.checked) {
        return resultado.innerHTML = 'Ganó Jugador 1'
    } else if  (papel1.checked && piedra2.checked) {
        return resultado.innerHTML = 'Ganó Jugador 1'
    } else if (piedra1.checked && tijera2.checked){
        return resultado.innerHTML = 'Ganó Jugador 1'
    } else if (nada1.checked && nada2.checked) {
    return resultado.innerText= "Es necesario que los dos jugadores contesten"

} else { 
      return resultado.innerHTML = 'Ganó Jugador 2'
    }    
}

boton.addEventListener('click',juego1)










