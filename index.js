const data = require('./data.json');



function filtrarMenoresDeIdade(data, idadeLimite) {
    return data.filter(item => item.age < idadeLimite);
}

const menoresDeIdade = filtrarMenoresDeIdade(data, 18);

console.log(menoresDeIdade);
console.log(menoresDeIdade.length);  


function filtrar(pessoas, chave) {
    return pessoas.filter(pessoa => pessoa[chave] < 1.5)
}

const listamenorestamanho = filtrar(data,'height')
console.log(listamenorestamanho)