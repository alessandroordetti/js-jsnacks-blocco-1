/**
 * 
Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

/* Variabile flag che userò nel ciclo per sommare i 10 numeri richiesti all'utente */
let sum = 0;

for (i = 0; i < 10; i++) {
    let userNumber = parseInt(prompt('scegli un numero'));

    console.log(userNumber); 

    sum += userNumber;

    console.log(sum);


}

