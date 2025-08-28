import readlineSync = require("readline-sync");
import { Queue } from '../Queue';

const fila = new Queue<string>();
let continuar: boolean = true;
let opcao: number;

do {
    console.log("*************************************");
    console.log("");
    console.log("      1 - Adicionar cliente na fila");
    console.log("      2 - Listar todos os clientes");
    console.log("      3 - Retirar cliente da fila");
    console.log("      0 - Sair");
    console.log("");
    console.log("*************************************");
    console.log("");
    console.log("Entre com a opção desejada");

    opcao = readlineSync.questionInt();

    switch (opcao) {
        case 1:
            let nome: string = readlineSync.question("Digite o nome da pessoa: ")
            fila.enqueue(nome);
            console.log("****************************")
            console.log("Pessoas atualmente na fila: ");
            fila.printQueue();
            break;
        
        case 2:
            console.log("Pessoas atualmente na fila: ");
            fila.printQueue();
            break;
        
        case 3:
            let proximo = fila.dequeue()
            console.log(proximo);
            break;
        
        case 0:
            console.log("Obrigada por utilizar o sistema de fila");
            continuar = false;
            break;
        
        default:
            console.log("Opção inválida!");
    }
} while (continuar);