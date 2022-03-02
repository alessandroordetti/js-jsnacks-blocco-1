const arrayLenght = 10;

const randomArray = [];

let sum = 0

for (let i = 0; i < arrayLenght; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
    sum = randomArray / 10;
}

console.log(randomArray);
console.log(sum);