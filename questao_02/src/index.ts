import {Data} from "./data";

function exec() {

    const data1 = new Data(1, 1, 2021);
    const data2 = new Data(1, 1, 2021);
    const data3 = new Data(2, 1, 2021);

    console.log(data1.toString());
    console.log(data1.getMesExtenso());
    console.log(data1.getAno())
    console.log(data1.getMes())
    console.log(data1.getDia())
    console.log(data1.equals(data2));
    console.log(data1.equals(data3));
}

exec();