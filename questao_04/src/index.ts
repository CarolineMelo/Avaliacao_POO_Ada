import {Data} from "../../questao_02/src/data";
import {VooFumantes} from "./vooFumantes";

function exec() {
    let vooFumantes = new VooFumantes(123, "São Paulo", "Rio de Janeiro", new Data(1, 1, 2020), "12:00", 30);

    vooFumantes.setNumeroPassageiros(100);
    vooFumantes.ocupaFumantes(1)
    vooFumantes.ocupa(2)
    console.log(`Número total de passageiros: ${vooFumantes.getNumeroPassageiros()}`);
    console.log(`Número total de passageiros fumantes: ${vooFumantes.getNumeroFumantes()}`);
    console.log(`Número total de vagas não fumantes: ${vooFumantes.vagasNaoFumantes()}`);
    console.log(`Número total de vagas fumantes: ${vooFumantes.vagasFumantes()}`);
    console.log(`Número total de vagas: ${vooFumantes.vagas()}`);
}

exec();