export class Data {

    private dia : number;
    private mes : number;
    private ano : number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    public getDia() : number {
        return this.dia;
    }

    public setDia(dia: number) : void {
        this.dia = dia;
    }

    public getMes() : number {
        return this.mes;
    }

    public getMesExtenso() : string {
        let mesExtenso : string = "";
        switch(this.mes) {
            case 1:
                mesExtenso = "Janeiro";
                break;
            case 2:
                mesExtenso = "Fevereiro";
                break;
            case 3:
                mesExtenso = "Março";
                break;
            case 4:
                mesExtenso = "Abril";
                break;
            case 5:
                mesExtenso = "Maio";
                break;
            case 6:
                mesExtenso = "Junho";
                break;
            case 7:
                mesExtenso = "Julho";
                break;
            case 8:
                mesExtenso = "Agosto";
                break;
            case 9:
                mesExtenso = "Setembro";
                break;
            case 10:
                mesExtenso = "Outubro";
                break;
            case 11:
                mesExtenso = "Novembro";
                break;
            case 12:
                mesExtenso = "Dezembro";
                break;
            default:
                mesExtenso = "Mês inválido";
                break;
        }
        return mesExtenso;
    }

    public setMes(mes: number) : void {
        this.mes = mes;
    }

    public getAno() : number {
        return this.ano;
    }

    public setAno(ano: number) : void {
        this.ano = ano;
    }

    public toString() : string {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }

    public equals(data: Data) : boolean {
        return this.dia === data.getDia() && this.mes === data.getMes() && this.ano === data.getAno();
    }
}

