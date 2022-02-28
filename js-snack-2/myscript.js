let firstWord = prompt('Scegli una parola');

let secondWord = prompt('Scegli una seconda parola'); 

if (firstWord.length > secondWord.length){
    console.log (secondWord);
    console.log (firstWord);
} else if (firstWord.length < secondWord.length){
    console.log (firstWord);
    console.log (secondWord);
} else {
    console.log ('Le parole hanno la stessa lunghezza');
}