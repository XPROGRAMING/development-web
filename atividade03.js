function meusDados() {
    let pessoa = {
        nome: 'John Doe',
        idade: '30',
        cidade: 'New York'
    }

    
    pessoa = {
        nome: 'Jane Doe',
        cidade: 'Los Angeles'
    }

    
    delete pessoa.idade

    console.log(pessoa)
    return pessoa
    // pessoa.escolaridade = 'Ensino medio completo'
}

meusDados()
