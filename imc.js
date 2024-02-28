const data = require('./data.json');

function obterPesos() {
    return data.map(item => item.weight);
}

function obterAlturas() {
    return data.map(item => item.height);
}

const pesos = obterPesos();
const alturas = obterAlturas();

console.log(pesos);
console.log(alturas);

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Baixo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso adequado";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade";
    } else {
        return "Obesidade";
    }
}


for (let i = 0; i < data.length; i++) {
    const imc = calcularIMC(pesos[i], alturas[i]);
    const classificacao = classificarIMC(imc);
    console.log(`IMC da pessoa ${i + 1}: ${imc.toFixed(2)} - ${classificacao}`);
}


