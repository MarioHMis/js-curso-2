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

// function saludo() {
//     console.log('Hola, mundo!')
// };

// saludo();

// //Ejercicio 2

// function saludoNombre(nombre) {
//     console.log(`Hola, ${nombre}!`)
// };

// saludoNombre('Mario');

// // Ejercicio 3

// function duplicar(num) {
//     let doble = num * 2;
//     return doble;
// }

// console.log(duplicar(22));

// //Ejercicio 4

// function calcularPromedio(num1, num2, num3){
//     let promedio = (num1 + num2 + num3) / 3;

//     return promedio;
// }

// console.log(calcularPromedio(2, 4, 6));

// //Ejercicio 5

// function numeroMayor(num1, num2) {

//     if(num1 > num2) {
//         return `El ${num1} es mayor que ${num2}`
//     } else {
//         return `El ${num2} es mayor que ${num1}`
//     }
// }

// console.log(numeroMayor(1,2));

// //Ejercicio 6

// function multiplicador (num1) {
//     let doble = (num1*num1)
//     return doble;
// }

// console.log(multiplicador(6));

//Ejercicio 1

// function indiceMasaCorporal(altura, peso) {
// let resultado = parseFloat(peso / (altura * altura));
// return resultado;
// };

// console.log(indiceMasaCorporal(1.76, 87 ));

// //Ejercicio 2

// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
  
// console.log(factorial(5));

// //Ejercio 3

// function conversionMoneda(dolar) {
//     let real = 4.8;
//    conversion = parseFloat(dolar * real)
//    return conversion;
// }

// console.log(conversionMoneda(10));

// // Ejercicio 4

// function areaRectangular(altura, anchura) {
//     areaSala = (altura * anchura)
//     return alert(areaSala);
// }

// area(2, 6)

// // Ejercicio 5

// function areaCirculo(radio){
//    let areaCircular = Math.PI * (radio * radio);
//     return areaCircular;
// }

// console.log(areaCirculo(3));

//Ejercicio 6

// function tablaDelNumero(numero) {

//   let resultado = '';
//   for (let i = 1; i <= 10; i++) {
//     resultado += `${numero} x ${i} = ${numero * i}\n`
//   }
//   return resultado;

    
// }


// console.log(tablaDelNumero(5));

//Desafios Arrays

//Ejercicio 1

let lista = [];

//Ehercicio 2

let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Ejercicio 3

lenguajesProgramacion.push('Java', 'Ruby', 'GoLang');

console.log(lenguajesProgramacion);

//Ejercicio 4

function lenguajesSeparadamente() {
    for (let i = 0; i < lenguajesProgramacion.length; i++) {
      console.log(lenguajesProgramacion[i]);
    }
  }
  
  lenguajesSeparadamente();

    //Ejercicio 5

    function mostrarLenguajesInverso () {
        let inverso = lenguajesProgramacion.slice().reverse(); //Use reverse y slide. 
        return console.log(inverso);
        }
        
        mostrarLenguajesInverso();

    //Ejercicio 6

    let listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];

    function promedioElementos () {

        let promedio = listaDeNumeros.reduce((total, numero) => total + numero, 0)/ listaDeNumeros.length;
        
        return promedio;

        //Se puede optimizar para que al pasar el parametro nos de el resultado

    }
    
    console.log(promedioElementos());

    //Ejercicio 7

    let listaNumeros = [1,2,3,4,5,6,7,8,9,10];

    function numeroMayorYMenor () {
        let numeroMayor = Math.max(...listaNumeros);
        let numeroMenor = Math.min(...listaNumeros)
        return `El numero mayor es ${numeroMayor} y el numero menor es ${numeroMenor}` ;
    }

    console.log(numeroMayorYMenor());

    //Ejercicio 8

    let listaElementos = [1,2,3,4,5,6,7,8,9,10];

    function sumaElementos() {
       let suma = listaElementos.slice().reduce((total, elemento) => total + elemento, 0);

       return suma;
    }


    console.log(sumaElementos());

    //Ejercicio 9

    let listaDeNombres = ['Lau', 'Stella', 'Mila', 'Mario'];

    function buscarIndiceNombre(nombre) {
        // Recorrer el array lista de nombres
        for (let i = 0; i < listaDeNombres.length; i++) {
            // Verificar si el elemento actual es igual al nombre buscado
            if (listaDeNombres[i] === nombre) {
                // Devolver el índice si se encuentra el nombre
                return i;
            }
        }
        // Devolver -1 si el nombre no se encuentra en el array
        return -1;
    }
    
    console.log(buscarIndiceNombre('Mario'));

    //Ejercicio 10 

    let listaNumeros1 = [1, 2, 3, 4, 5];
    let listaNumeros2 = [6, 7, 8, 9, 10];

    function listas() {
        let sumaDeListas = [];

        //Iteracion sobre los arrays y sumar los elementos 

        for( let i = 0; i < listaNumeros1.length; i ++) {
            sumaDeListas.push(listaNumeros1[i] + listaNumeros2[i]);
        }
        return sumaDeListas;
    }
    
    console.log(listas());

    //Ejercicio 11

    let listadoDeNumeros = [1, 2, 3, 4, 5];

    function numeroCuadrado (listadoDeNumeros) {

        let cuadrados = [];

        for( let i = 0; i < listadoDeNumeros.length; i++) {
            
            let cuadrado = listadoDeNumeros[i] * listadoDeNumeros[i];
            cuadrados.push(cuadrado);
            
         }
         return cuadrados;
        
    }

console.log(numeroCuadrado(listadoDeNumeros));






let numeroSecreto = 0;
let intentos =  0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//Variable de limite de juegos
let maxJuegos = 1;
//Variable de contador de juegos realizados
let juegosRealizados = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //El usuario no acerto. 
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es menor')
    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor')
    }
    intentos++;
    limpiarCaja();
};
return;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
    // let valorCaja = document.getElementById('valorUsuario');
    // valorCaja.value = ''; Es otra forma de realizarlo.
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else {
        //Si el numero geneado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //reiniciar condiciones iniciales del juego
    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    //Reinicia el contador de los juegos realizados 
    juegosRealizados = 0;
 }

 condicionesIniciales();
