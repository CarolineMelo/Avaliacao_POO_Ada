import {exec} from "./index";

export class Produto {
    codigo: number;
    nome: string;
    preco: number;

    constructor(codigo: number, nome: string, preco: number) {

        if (isNaN(codigo) || typeof nome !== "string" || isNaN(preco)) {
            console.log(`O produto ${nome} não foi inserido pois algum dado é inválido`);
            exec()
        }

        if (codigo <= 0 || preco <= 0) {
            console.log(`O produto ${nome} não foi adicionado pois o código ou o preço é menor ou igual a zero`);
        } else if (nome.length < 3) {
            console.log(`O produto ${nome} não foi adicionado pois o nome tem menos de 3 caracteres`);
        }
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }

    getPreco(): number {
        return this.preco;
    }
    getNome(): string {
        return this.nome;
    }
    getCodigo(): number {
            return this.codigo;
    }

    setPreco(preco: number){
        this.preco = preco;
    }
    setNome(nome: string){
        this.nome = nome;
    }

}

