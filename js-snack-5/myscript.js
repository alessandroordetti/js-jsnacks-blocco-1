const array = [];

for (let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt('Scegli un numero'));

    if ((userNumber % 2 != 0) && (userNumber != isNaN)) {
        array.push(userNumber);
    }
}

console.log(array);