import readlineSync = require('readline-sync');
import { Stack } from '../Stack';

const pilha = new Stack<string>();
let livro: string; 
let opcao: number;
let continuar: boolean = true;


do {
    console.log("\n*************************************");
    console.log("");
    console.log("      1 - Adicionar novo livro na pilha");
    console.log("      2 - Listar todos os livros na pilha");
    console.log("      3 - Retirar novo livro na pilha");
    console.log("      0 - Sair");
    console.log("");
    console.log("*************************************");
    console.log("");
    console.log("Entre com a opção desejada:");
    
    opcao = readlineSync.questionInt();

    switch (opcao) {
        case 1:
            console.log("Digite o nome do livro que deseja inserir na pilha:\n");
            livro = readlineSync.question();
            livro.trim;
            pilha.push(livro);
            console.log("\nLivros na pilha: ");
            console.log(pilha);
            break;
        
        case 2:
            if (pilha.isEmpty() == true) {
                ("Nao ha livros na pilha!");
            }
            console.log("Livros na pilha: ");
            console.log(pilha);
            break;
        
        case 3:
            console.log(pilha);
            let removedBook = pilha.pop();
            
            if (pilha.isEmpty() == true) {
                break;
            }

            console.log("Livro " + removedBook + " removido com sucesso");
            console.log(pilha);
            break;
        
        case 0:
            console.log("Obrigada por utilizar a pilha!");
            continuar = false;
            break;
        
        default:
            console.log("Opcao invalida!");
    }
} while(continuar)