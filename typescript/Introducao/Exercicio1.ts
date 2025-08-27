import readlinesync = require("readline-sync");

let cor: string;
const listaCores: Array<string> = [];
let continuar: string | boolean;

do {
    cor = readlinesync.question("Digite uma cor para inserir na lista: ");
    listaCores.push(cor);
    continuar = readlinesync.keyInYN("Deseja inserir outra cor?");
} while (continuar);

console.log(listaCores);
listaCores.sort();
console.log(listaCores);