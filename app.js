let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';


function botonClicado (){
console.log('El boton fue clicado')
}


function botonPrompt(){
    let ciudad = prompt('Ingresa el nombre de una ciudad de Mexico: ');
    alert(`Estuve en ${ciudad} y me acorde de ti!`)
}

function alerta() {
    alert('Yo amo JS')
}

function suma(){
    let num1 = parseInt(prompt('Ingresa el numero 1'));
    let num2 = parseInt(prompt('ingresa el numero 2'));
    let suma = num1 + num2;

    alert(`El resultado de la suma de ${num1} + ${num2} es  = ${suma}`);
}