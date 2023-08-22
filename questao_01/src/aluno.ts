export class Aluno {

    private nome : string;
    private matricula : number;
    private notaProva1 : number | null = null;
    private notaProva2 : number | null = null;
    private notaTrabalho: number | null = null;
    private media : number | null = null;
    private resultadoFinal : string | null = "";

    constructor(nome: string, matricula: number) {
        this.nome = nome;
        this.matricula = matricula;
    }

    public getNome() : string {
        return this.nome;
    }

    public setNome(nome: string) : void {
        this.nome = nome;
    }

    public getMatricula() : number {
        return this.matricula;
    }

    public setMatricula(matricula: number) : void {
        this.matricula = matricula;
    }

    public getNotaProva1() : number | string {
        if (this.notaProva1 === null) {
            return "Nota da prova 1 não foi atribuída";
        } else {
            return this.notaProva1;
        }
    }

    public setNotaProva1(notaProva1: number) : void | string {
        if (notaProva1 < 0) {
            return "Nota da prova 1 não pode ser menor que 0";
        } else if (notaProva1 > 10) {
            return "Nota da prova 1 não pode ser maior que 10";
        } else {
            this.notaProva1 = notaProva1;
        }
    }

    public getNotaProva2() : number | string {
        if (this.notaProva2 === null) {
            return "Nota da prova 2 não foi atribuída";
        } else {
            return this.notaProva2;
        }
    }

    public setNotaProva2(notaProva2: number) : void | string {
        if (notaProva2 < 0) {
            return "Nota da prova 2 não pode ser menor que 0";
        } else if (notaProva2 > 10) {
            return "Nota da prova 2 não pode ser maior que 10";
        } else {
            this.notaProva2 = notaProva2;
        }
    }

    public getNotaTrabalho() : number | string {
        if (this.notaTrabalho === null) {
            return "Nota do trabalho não foi atribuída";
        } else {
            return this.notaTrabalho;
        }
    }

    public setNotaTrabalho(notaTrabalho: number) : void | string {
        if (notaTrabalho < 0) {
            return "Nota do trabalho não pode ser menor que 0";
        } else if (notaTrabalho > 10) {
            return "Nota do trabalho não pode ser maior que 10";
        } else {
            this.notaTrabalho = notaTrabalho;
        }
    }

    public calcularMedia() : number | string {
        if (
            typeof(this.notaProva1) !== "number" &&
            typeof(this.notaProva2) !== "number" &&
            typeof(this.notaTrabalho) !== "number"
        ) {
            return "Nenhuma nota foi atribuída";
        } else if (
            typeof(this.notaProva1) !== "number" &&
            typeof(this.notaProva2) !== "number"
        ) {
            return "Nota da prova 1 e prova 2 não foi atribuída";
        } else if (
            typeof(this.notaTrabalho) !== "number" &&
            typeof(this.notaProva1) !== "number"
        ) {
            return "Nota do trabalho e nota prova 1 não foi atribuída";
        } else if (
            typeof(this.notaTrabalho) !== "number" &&
            typeof(this.notaProva2) !== "number"
        ) {
            return "Nota do trabalho e nota prova 2 não foi atribuída";
        } else if (
            typeof(this.notaProva1) !== "number"
        ) {
            return "Nota da prova 1 não foi atribuída";
        } else if (
            typeof(this.notaProva2) !== "number"
        ) {
            return "Nota da prova 2 não foi atribuída";
        } else if (
            typeof(this.notaTrabalho) !== "number"
        ) {
            return "Nota do trabalho não foi atribuída";
        }

        else {
            const nota1 = this.notaProva1 * 0.25;
            const nota2 = this.notaProva2 * 0.25;
            const nota3 = this.notaTrabalho * 0.20;
            this.media = ((nota1 + nota2 + nota3) / 7) * 10;
            return this.media.toFixed(2);
        }
    }

    public statusAprovacao() : void | string {
        if (
            typeof(this.notaProva1) !== "number" &&
            typeof(this.notaProva2) !== "number" &&
            typeof(this.notaTrabalho) !== "number"
        ) {
            console.log("Cursando");
        } else {
            const media = this.calcularMedia();
            if (typeof(media) !== "number") {
                return "Média ainda não foi calculada";
            } else if (media < 7) {
                console.log("Reprovado");
                this.resultadoFinal = "Reprovado";
            } else {
                console.log("Aprovado");
                this.resultadoFinal = "Aprovado";
            }
        }

    }

    public quantoFaltaParaAprovacao() : string {
        if (
            typeof(this.notaProva1) !== "number" &&
            typeof(this.notaProva2) !== "number" &&
            typeof(this.notaTrabalho) !== "number"
        ) {
            return "Nenhuma nota foi atribuída falta 10 pontos para aprovação";
        } else if (
            typeof(this.notaProva1) !== "number" &&
            typeof(this.notaProva2) !== "number" &&
            typeof(this.notaTrabalho) === "number"
        ) {
            const nota1 = 0;
            const nota2 = 0;
            const nota3 = this.notaTrabalho * 0.20;

            const media = ((nota1 + nota2 + nota3) / 7) * 10;
            const faltante = 7 - media;
            return `Prova 1 e prova 2 não foi realizada, sua media atual é ${media.toFixed(2)}, falta ${faltante.toFixed(2)} pontos para aprovação`;
        } else if (
            typeof(this.notaTrabalho) !== "number" &&
            typeof(this.notaProva1) !== "number" &&
            typeof(this.notaProva2) === "number"
        ) {
            const nota1 = 0;
            const nota2 = this.notaProva2 * 0.25;
            const nota3 = 0;

            const media = ((nota1 + nota2 + nota3) / 7) * 10;
            const faltante = 7 - media;
            return `Prova 1 e trabalho não foi realizada, sua media atual é ${media.toFixed(2)}, falta ${faltante.toFixed(2)} pontos para aprovação`;
        } else if (
            typeof(this.notaTrabalho) !== "number" &&
            typeof(this.notaProva2) !== "number" &&
            typeof(this.notaProva1) === "number"
        ) {
            const nota1 = this.notaProva1 * 0.25;
            const nota2 = 0;
            const nota3 = 0;

            const media = ((nota1 + nota2 + nota3) / 7) * 10;
            const faltante = 7 - media;
            return `Prova 2 e trabalho não foi realizada, sua media atual é ${media.toFixed(2)}, falta ${faltante.toFixed(2)} pontos para aprovação`;
        } else if (
            typeof(this.notaProva1) !== "number" &&
            typeof(this.notaProva2) === "number" &&
            typeof(this.notaTrabalho) === "number"
        ) {
            const nota1 = 0;
            const nota2 = this.notaProva2 * 0.25;
            const nota3 = this.notaTrabalho * 0.20;

            const media = ((nota1 + nota2 + nota3) / 7) * 10;
            const faltante = 7 - media;
            return `Prova 1 não foi realizada, sua media atual é ${media.toFixed(2)}, falta ${faltante.toFixed(2)} pontos para aprovação`;
        } else if (
            typeof(this.notaProva2) !== "number" &&
            typeof(this.notaTrabalho) === "number" &&
            typeof(this.notaProva1) === "number"
        ) {
            const nota1 = this.notaProva1 * 0.25;
            const nota2 = 0;
            const nota3 = this.notaTrabalho * 0.20;

            const media = ((nota1 + nota2 + nota3) / 7) * 10;
            const faltante = 7 - media;
            return `Prova 2 não foi realizada, sua media atual é ${media.toFixed(2)}, falta ${faltante.toFixed(2)} pontos para aprovação`;
        } else if (
            typeof(this.notaTrabalho) !== "number" &&
            typeof(this.notaProva1) === "number" &&
            typeof(this.notaProva2) === "number"
        ) {
            const nota1 = this.notaProva1 * 0.25;
            const nota2 = this.notaProva2 * 0.25;
            const nota3 = 0;

            const media = ((nota1 + nota2 + nota3) / 7) * 10;
            const faltante = 7 - media;
            return `Prova 2 não foi realizada, sua media atual é ${media.toFixed(2)}, falta ${faltante.toFixed(2)} pontos para aprovação`;
        } else {
            const nota1 = Number(this.notaProva1) * 0.25;
            const nota2 = Number(this.notaProva2) * 0.25;
            const nota3 = Number(this.notaTrabalho) * 0.20;

            const media = ((nota1 + nota2 + nota3) / 7) * 10;
            const faltante = 7 - media;
            if (faltante < 0) {
                return `Sua media atual é ${media.toFixed(2)}, você foi aprovado`;
            } else {
                return `Sua media atual é ${media.toFixed(2)}, falta ${faltante.toFixed(2)} pontos para aprovação`;
            }
        }
    }
}