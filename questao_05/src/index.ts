import promptSync from "prompt-sync";
import {Produto} from "./produto";
import {Estoque} from "./estoque";

const estoque = new Estoque();

const prompt = promptSync();

export function exec(): void {

    console.log("Bem vindo ao estoque de produtos");
    console.log("Digite 1 para adicionar um produto");
    console.log("Digite 2 para remover um produto");
    console.log("Digite 3 para alterar um produto");
    console.log("Digite 4 para listar um produto por código");
    console.log("Digite 5 para listar todos os produtos");
    console.log("Digite 6 para calcular o valor total do estoque");
    console.log("Digite 0 para sair");


    const opcao = prompt("Digite a opção: ");


    switch (opcao) {
        case "0":
            console.log("Obrigado por usar nosso sistema");
            break;
        case "1":
            const codigo = Number(prompt("Digite o código do produto: "));
            const nome = prompt("Digite o nome do produto: ");
            const preco = Number(prompt("Digite o preço do produto: "));
            const produto = new Produto(codigo, nome, preco);
            estoque.addProduto(produto);
            exec();
            break;
        case "2":
            const codigoParaRemover = Number(prompt("Digite o código do produto que deseja remover: "));
            estoque.removerProdutoPorCodigo(codigoParaRemover);
            exec();
            break;
        case "3":
            const codigoParaAlterar = Number(prompt("Digite o código do produto que deseja alterar: "));
            const novoCodigo = Number(prompt("Digite o novo código do produto: "));
            const novoNome = prompt("Digite o novo nome do produto: ");
            const novoPreco = Number(prompt("Digite o novo preço do produto: "));
            const novoProduto = new Produto(novoCodigo, novoNome, novoPreco);
            estoque.alterarProdutoPorCodigo(codigoParaAlterar, novoProduto);
            exec();
            break;
        case "4":
            const codigoParaListar = Number(prompt("Digite o código do produto que deseja listar: "));
            estoque.listarEstoqueDeProdutoPorCodigo(codigoParaListar);
            exec();
            break;
        case "5":
            estoque.listarEstoqueDeProdutos();
            exec();
            break;
        case "6":
            const soma = estoque.calcularValorTotalDoEstoque();
            console.log(`O valor total do estoque é ${soma}`);
            exec();
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}

exec();