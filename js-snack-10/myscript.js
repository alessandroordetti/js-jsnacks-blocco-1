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
    const array = [];
    while (array.length < 10) {
        array.push(Math.floor(Math.random() * 4352) + 4);
    }

    console.log(array);
}