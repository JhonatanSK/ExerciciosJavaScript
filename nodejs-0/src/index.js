'use strict'

const fibonacci = () => {
    let result = 1;
    let posicao = 0;

    let lista = [0];
    let verifica = true;

    while(verifica){
        lista.push(result);
        result = result + lista[posicao];
        posicao++;
        if(result > 350){
            lista.push(result);
            break;
        }
    }
    return lista;
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
