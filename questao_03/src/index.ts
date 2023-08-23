import {Data} from "../../questao_02/src/data";
import {Voo} from "./voo";

function exec() {
    let voo = new Voo(123, "São Paulo", "Rio de Janeiro", new Data(1, 1, 2020), "12:00");

    let numeroCadeira = 1;

    voo.ocupa(1);
    voo.ocupa(2);
    console.log(`A cadeira ${numeroCadeira} esta ocupada: ${voo.isOcupado(1)}`);
    console.log(`Qual o proxima cadeira livre: ${voo.proximoLivre()}`);

    console.log(`Cadeiras ocupadas ${voo.getCadeiras()}`);

    console.log(`Vagas disponiveis ${voo.vagas()}.`);
    console.log(`Numero do voo ${voo.getNumero()}.`);
}

exec();