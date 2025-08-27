import readlinesync = require("readline-sync");

const setNumeros: Set<number> = new Set<number>();
const listaNumeros: Array<number> = [];
let addNumero: number;
let i: number = 0;
let numero: number;

for (i = 0; i < 10; i++) {
    addNumero = readlinesync.questionInt("Digite o " + (i + 1) + " numero para inserir na lista: ");
    setNumeros.add(addNumero);
}

console.log(setNumeros);