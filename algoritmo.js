//algoritmo fibonacci
//Senquencia: soma-se os dois termos anteriores.
//1 1 2 3 5 8...
let n = 10;
let anterior1 = 1;
let anterior2 = 1;
let proximo = 0;
console.log("\n\nINICIO DA SERIE");
console.log("\n\nUTILIZANDO FOR");
console.log(anterior1, anterior2);

for (let i = 0; i < n; i++) {
    proximo = anterior2 + anterior1
    console.log(proximo);
    anterior2 = anterior1;
    anterior1 = proximo;
}


console.log("\n\nUTILIZANDO WHILE");

let m = 10;
let ant1 = 1;
let ant2 = 1;
let prox = 0;
let cont = 0;

while (cont < m) {
    prox = ant2 + ant1
    console.log(prox);
    ant2 = ant1;
    ant1 = prox;
    cont++

}
