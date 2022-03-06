/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */

let array = [];

let somma = 0;

let indice = 0;

while (somma < 200) {
    array.push(parseInt(prompt("Scegli un numero")));

    somma += array[array.length - 1];
    indice++;
} 

console.log(array);

console.log(somma);

console.log(indice);