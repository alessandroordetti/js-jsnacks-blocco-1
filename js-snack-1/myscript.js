let firstUserNumber = parseInt(prompt('Scegli un numero'));

console.log (firstUserNumber);

let secondUserNumber = parseInt(prompt('Scegli un altro numero'));

console.log (secondUserNumber);
if ( isNaN(firstUserNumber) || isNaN(secondUserNumber)) {
    console.log('Non hai scelto un numero valido');
} else if (firstUserNumber > secondUserNumber) {
    console.log('Hai scelto un numero maggiore rispetto al computer');
} else if (firstUserNumber < secondUserNumber)  {
    console.log('Hai scelto un numero minore rispetto al computer');
} else {
    console.log('Hai scelto un numero uguale al computer');
}
