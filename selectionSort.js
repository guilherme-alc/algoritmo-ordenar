const livros = require("./listaLivro")
const menorValor = require("./menorValor")

function selectionSort(arr){
    for(let atual = 0; atual < arr.length - 1; atual++){
        let menor = menorValor(arr, atual)

        let livroAtual = arr[atual]
        let livroMenorPreco =  arr[menor]

        arr[atual] = livroMenorPreco
        arr[menor] = livroAtual
    }
    console.log(arr)
}
selectionSort(livros)
