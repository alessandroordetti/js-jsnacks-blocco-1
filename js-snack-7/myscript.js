/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */


const randomArray = [];

let sum = 0

for (let i = 0; i < 10; i++) {
    let randomNumber = (Math.floor(Math.random() * 100));
    randomArray.push(randomNumber);
    sum += randomArray[i];
}

console.log(randomArray);
console.log(sum);
console.log(sum / randomArray.length);