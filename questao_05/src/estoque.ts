import {Produto} from "./produto";

export class Estoque {
    produtos: Produto[];

    constructor() {
        this.produtos = [];
    }

    addProduto(produto: Produto){
        console.log(produto);
        console.log(produto.getCodigo());
        console.log(produto.getNome());
        console.log(produto.getPreco());

        const codigo = produto.getCodigo();
        const preco = produto.getPreco();
        console.log(typeof produto.getCodigo());
        console.log(typeof produto.getNome());
        console.log(typeof produto.getPreco());
        // vai adicionar o produto no array com push
        try {
            if (codigo > 0 && typeof produto.getNome() === "string" && preco > 0.01) {
                if (produto.getCodigo() === undefined || produto.getNome() === undefined || produto.getPreco() === undefined) {
                    console.log(`O produto ${produto.getNome()} não foi adicionado pois está faltando algum atributo`);
                    return;
                } else if (produto.getCodigo() <= 0 || produto.getPreco() <= 0) {
                    console.log(`O produto ${produto.getNome()} não foi adicionado pois o código ou o preço é menor ou igual a zero`);
                    return;
                } else if (produto.getNome().length < 3) {
                    console.log(`O produto ${produto.getNome()} não foi adicionado pois o nome tem menos de 3 caracteres`);
                    return;
                } else if (produto.getPreco() < 0.01) {
                    console.log(`O produto ${produto.getNome()} não foi adicionado pois o preço é menor que 0.01`);
                    return;
                } else if (produto.getNome().length > 50) {
                    console.log(`O produto ${produto.getNome()} não foi adicionado pois o nome tem mais de 50 caracteres`);
                    return;
                } else {
                    const existProduct = this.acharProdutoPorCodigo(produto.getCodigo());
                    if (existProduct !== undefined) {
                        console.log(`Já existe um produto com o código ${produto.getCodigo()}`);
                        return;
                    } else {
                        this.produtos.push(produto);
                        console.log(`O produto ${produto.getNome()} foi adicionado com sucesso`);
                    }
                }
            } else {
                console.log(`O produto ${produto.getNome()} não foi adicionado pois algum atributo não é do tipo esperado`);
                console.log(`O tipo esperado para o código é number, o tipo recebido foi ${typeof produto.getCodigo()}`);
                console.log(`O tipo esperado para o nome é string, o tipo recebido foi ${typeof produto.getNome()}`);
                console.log(`O tipo esperado para o preço é number, o tipo recebido foi ${typeof produto.getPreco()}`);
                return;
            }

        } catch (error) {
            console.log(`Ocorreu um erro ao adicionar o produto ${produto.getNome()}`);
        }
    }

    removerProdutoPorCodigo(codigo: number){
        // vai filtrar o array e remover o produto que tiver o codigo igual ao codigo passado, criando uma nova lista
        try {
            if (this.acharProdutoPorCodigo(codigo) === undefined) {
                console.log(`Não foi encontrado nenhum produto com o código ${codigo}`);
                return;
            } else {
                this.produtos = this.produtos.filter(produto => produto.getCodigo() != codigo);
                console.log(`O produto com o código ${codigo} foi removido com sucesso`);
            }
        } catch (error) {
            console.log(`Ocorreu um erro ao remover o produto com o código ${codigo}`);
        }
    }

    // retorna Produto ou undefined, ou seja, se não achar o produto retorna undefined
    acharProdutoPorCodigo(codigo: number): Produto | undefined {
        // vai retornar o produto que tiver o codigo igual ao codigo passado
        const produto = this.produtos.find(produto => produto.getCodigo() == codigo);
        if (produto === undefined) {
            console.log(`Não foi encontrado nenhum produto com o código ${codigo}`);
        }
        return produto;
    }

    alterarProdutoPorCodigo(codigo: number, novoProduto: Produto) {
        try {
            // atribui a variavel o produto que vai ser alterado
            const produtoParaAlterar = this.acharProdutoPorCodigo(codigo);
            // se o produto existir, vai percorrer o array e alterar o produto
            if (produtoParaAlterar !== undefined) {
                for (let i = 0; i < this.produtos.length; i++) {
                    // se o codigo do produto for igual ao codigo do produto que vai ser alterado
                    if (this.produtos[i].codigo === codigo) {
                        // vai alterar o produto
                        this.produtos[i] = novoProduto;
                        break;
                    }
                }
            } else {
                console.log(`Não foi encontrado nenhum produto com o código ${codigo}`);
            }
        } catch (error) {
            console.log(`Ocorreu um erro ao alterar o produto com o código ${codigo}`);
        }
    }

    listarEstoqueDeProdutos(){
        // vai percorrer o Array e para cada produto vai imprimir no console
        if (this.produtos.length === 0) {
            console.log("Não temos nenhum produto no estoque");
            return;
        } else {
            this.produtos.forEach(produto => console.log(produto));
        }
    }

    listarEstoqueDeProdutoPorCodigo(codigo: number){
        // vai percorrer o Array e para cada produto vai imprimir no console

        try {
            let produtosEncontrados: Produto[] = [];
            this.produtos.forEach(produto => {
                // se o codigo do produto for igual ao codigo passado, vai imprimir o produto
                if (produto.getCodigo() === codigo) {
                    produtosEncontrados.push(produto);
                }
            });

            if (produtosEncontrados.length > 0) {
                console.log(`Temos ${produtosEncontrados.length} unidades do produto ${produtosEncontrados[0].getNome()} no estoque`);
            } else {
                console.log(`Não temos o produto com o código ${codigo} no estoque`);
            }
        } catch (error) {
            console.log(`Ocorreu um erro ao listar o produto com o código ${codigo}`);
        }

    }

    calcularValorTotalDoEstoque(): number {
        // reduce(acumulador, elemento) => acumulador + elemento)
        // vai percorrer o array e para cada produto vai somar o preço
        let soma = 0;
        try {
            if (this.produtos.length === 0) {
                console.log("Não temos nenhum produto no estoque");
                return 0;
            } else {
                soma = this.produtos.reduce((total, produto) => total + produto.getPreco(), 0);
                return soma;
            }
        } catch (error) {
            console.log("Ocorreu um erro ao calcular o valor total do estoque");
            return 0;
        }
    }


}

