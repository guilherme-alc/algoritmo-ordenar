const livros = require('./listaLivro')

function menorValor (array){
    let maisBarato = 0;

    for(let atual = 0; atual < array.length; atual++) {
        if(array[atual].preco < array[maisBarato].preco) {
            maisBarato = atual
        }
    }
    console.log(array[maisBarato])

}


menorValor(livros)