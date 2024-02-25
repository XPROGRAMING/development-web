function manipulaArray() {
    let animais = ['cachorro', 'gato', 'abelha', 'rato', 'leão', 'galinha']

    function ordemAlfabetica() {
        return animais = animais.slice().sort()
    }

    function primeiro() {
        return animais[0]
    }

    function ultimo() {
        return animais[animais.length - 1]
    }

    function tamanhoDaLista() {
        return animais.length
    }

    return {
        ordemAlfabetica,
        primeiro,
        ultimo,
        tamanhoDaLista
    }
}


let manipulador = manipulaArray()

console.log(manipulador.ordemAlfabetica()) 
console.log(manipulador.primeiro())       
console.log(manipulador.ultimo())    
console.log(manipulador.tamanhoDaLista()) 
