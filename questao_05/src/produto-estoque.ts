class Produto {
    codigo: number;
    nome: String;
    preco: number;
    quantidade: number;

    constructor(codigo: number, nome: String, preco: number, quantidade: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    getPreco(): number {
        return this.preco;
    }
    getNome(): String {
        return this.nome;
    }
    getCodigo(): number {
        return this.codigo;
    }
    getQuantidade(): number {
        return this.quantidade;
    }
    setPreco(preco: number){
        this.preco = preco;
    }
    setNome(nome: String){
        this.nome = nome;
    }
    setCodigo(codigo: number){
        this.codigo = codigo;
    }
    setQuantidade(quantidade: number){
        this.quantidade = quantidade;
    }

}

class Estoque {
    produtos: Produto[];

    constructor() {
        this.produtos = [];
    }

    addProduto(produto: Produto){
        // vai adicionar o produto no array com push
        this.produtos.push(produto);
    }

    removerProdutoPorCodigo(codigo: number){
        // vai filtrar o array e remover o produto que tiver o codigo igual ao codigo passado, criando uma nova lista
        this.produtos = this.produtos.filter(produto => produto.getCodigo() != codigo);
    }
    
        // retorna Produto ou undefined, ou seja, se não achar o produto retorna undefined
    acharProdutoPorCodigo(codigo: number): Produto | undefined {
        // vai retornar o produto que tiver o codigo igual ao codigo passado
        return this.produtos.find(produto => produto.getCodigo() == codigo);
    }

    alterarProdutoPorCodigo(codigo: number, novoProduto: Produto) {
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
        }
    }

    listarEstoqueDeProdutos(){
        // vai percorrer o Array e para cada produto vai imprimir no console
        this.produtos.forEach(produto => console.log(produto));
    }

    calcularValorTotalDoEstoque(): number {
        // reduce(acumulador, elemento) => acumulador + elemento)
        // vai percorrer o array e para cada produto vai somar o preço
        return this.produtos.reduce((total, produto) => total + produto.getPreco(), 0);
    }

    
}

