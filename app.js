// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora del Desafio';


// function botonClicado (){
// console.log('El boton fue clicado')
// }


// function botonPrompt(){
//     let ciudad = prompt('Ingresa el nombre de una ciudad de Mexico: ');
//     alert(`Estuve en ${ciudad} y me acorde de ti!`)
// }

// function alerta() {
//     alert('Yo amo JS')
// }

// function suma(){
//     let num1 = parseInt(prompt('Ingresa el numero 1'));
//     let num2 = parseInt(prompt('ingresa el numero 2'));
//     let suma = num1 + num2;

//     alert(`El resultado de la suma de ${num1} + ${num2} es  = ${suma}`);
// }

//Desafio funciones

//Ejercicio 1

function saludo() {
    console.log('Hola, mundo!')
};

saludo();

//Ejercicio 2

function saludoNombre(nombre) {
    console.log(`Hola, ${nombre}!`)
};

saludoNombre('Mario');

// Ejercicio 3

function duplicar(num) {
    let doble = num * 2;
    return doble;
}

console.log(duplicar(22));

//Ejercicio 4

function calcularPromedio(num1, num2, num3){
    let promedio = (num1 + num2 + num3) / 3;

    return promedio;
}

console.log(calcularPromedio(2, 4, 6));

//Ejercicio 5

function numeroMayor(num1, num2) {

    if(num1 > num2) {
        return `El ${num1} es mayor que ${num2}`
    } else {
        return `El ${num2} es mayor que ${num1}`
    }
}

console.log(numeroMayor(1,2));

//Ejercicio 6

function multiplicador (num1) {
    let doble = (num1*num1)
    return doble;
}

console.log(multiplicador(6));