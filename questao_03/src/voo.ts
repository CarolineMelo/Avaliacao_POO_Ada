import {Data} from "../../questao_02/src/data";

export class Voo {
    private _numero: number;
    private _origem: string;
    private _destino: string;
    private _data: Data;
    private _hora: string;
    private numaroPassageiros: number = 100;
    private cadeiras = new Array(this.numaroPassageiros);


    constructor(numero: number, origem: string, destino: string, data: Data, hora: string) {
        this._numero = numero;
        this._origem = origem;
        this._destino = destino;
        this._data = data;
        this._hora = hora;
    }

    public setNumeroPassageiros(numero: number) {
        this.numaroPassageiros = numero;
        this.cadeiras = new Array(this.numaroPassageiros);
    }

    public getNumeroPassageiros(): number {
        return this.numaroPassageiros;
    }

    public getCadeiras(): Array<boolean> {
        return this.cadeiras;
    }

    public proximoLivre(): number {
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (!this.cadeiras[i]) {
                return i + 1;
            }
        }
        return -1;
    }

    public getNumero(): number {
        return this._numero;
    }

    get origem(): string {
        return this._origem;
    }

    get destino(): string {
        return this._destino;
    }

    get data(): string {
        return this._data.toString();
    }

    get hora(): string {
        return this._hora;
    }

    public ocupa(i: number): boolean {
        const cadeira = i - 1
        if (this.cadeiras[cadeira]) {
            return false;
        } else {
            this.cadeiras[cadeira] = true;
            return true;
        }
    }

    public isOcupado(i: number): boolean {
        if(this.cadeiras[i] === true) {
            return true;
        } else {
            return false;
        }
    }

    public vagas(): number {
        let vagas = 0;
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (!this.cadeiras[i]) {
                vagas++;
            }
        }
        return vagas;
    }
}
