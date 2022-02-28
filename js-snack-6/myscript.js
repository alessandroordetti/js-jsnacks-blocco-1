const userNumber = prompt('Scegli un numero di 7 cifre');

let sum = 0;

for (let i = 0; i < 7; i++) {
    sum += parseInt(userNumber.charAt(i));
}

console.log(sum);

