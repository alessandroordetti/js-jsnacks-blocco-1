/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */


let N = parseInt(prompt('scegli un numero'));
console.log(N);

while (isNaN(N)) {
    N = parseInt(prompt('scegli un numero'));
}

if (N > 10) {
    N = 10;
}

let arrays = [];

for (let i = 0; i < N; i++) {
    const singleArray = [];
    while (singleArray.length < 10) {
        singleArray.push(Math.floor(Math.random() * 4352) + 4);
    }

    console.log(singleArray);

    arrays.push(singleArray);
}