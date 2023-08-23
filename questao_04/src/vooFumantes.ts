import {Voo} from "../../questao_03/src/voo";
import {Data} from "../../questao_02/src/data";

export class VooFumantes extends Voo {

    private numeroFumantes : number = 0;
    private cadeirasFumantes = new Array(this.numeroFumantes);
    private numeroPassageirosNaoFumantes: number = 0;

    constructor(numero: number, origem: string, destino: string, data: Data, hora: string, numeroFumantes: number) {
        super(numero, origem, destino, data, hora);
        this.numeroFumantes = numeroFumantes;
        this.cadeirasFumantes = new Array(this.numeroFumantes);
        this.numeroPassageirosNaoFumantes = this.getNumeroPassageiros() - this.numeroFumantes;
    }

    public setNumeroFumantes(numero: number) {
        this.numeroFumantes = numero;
        this.cadeirasFumantes = new Array(this.numeroFumantes);
        this.removeVagasFumantes(numero);
    }

    public getCadeirasFumantes(): Array<boolean> {
        return this.cadeirasFumantes;
    }

    public proximoLivreFumantes(): number {
        for (let i = 0; i < this.cadeirasFumantes.length; i++) {
            if (!this.cadeirasFumantes[i]) {
                return i + 1;
            }
        }
        return -1;
    }

    public ocupaFumantes(i: number): boolean {
        const cadeira = i - 1
        if (this.cadeirasFumantes[cadeira]) {
            return false;
        }
        this.cadeirasFumantes[cadeira] = true;
        return true;
    }

    public isOcupadoFumantes(i: number): boolean {
        const cadeira = i - 1
        return this.cadeirasFumantes[cadeira];
    }

    public vagasFumantes(): number {
        let vagas = 0;
        for (let i = 0; i < this.cadeirasFumantes.length; i++) {
            if (!this.cadeirasFumantes[i]) {
                vagas++;
            }
        }
        return vagas;
    }

    public removeVagasFumantes(numeroFumantes: number): void {
        let vagas = this.getNumeroPassageiros()

        this.setNumeroPassageiros(vagas - numeroFumantes)
    }

    public getNumeroFumantes(): number {
        return this.numeroFumantes;
    }

    public vagasNaoFumantes(): number {
        return super.vagas() - this.numeroFumantes;
    }

    override vagas(): number {
        let totalVagasFumantes = 0;

        for (let i = 0; i < this.getCadeirasFumantes().length; i++) {
            if (this.cadeirasFumantes[i]) {
                totalVagasFumantes++;
            }
        }

        return super.vagas() - totalVagasFumantes;
    }
}
