function troca(arr, analise) {
    let itemAnalise = arr[analise]
    let itemAnterior =  arr[analise - 1]

    // trocando a posição dos objetos
    arr[analise] = itemAnterior
    arr[analise - 1] = itemAnalise
}

module.exports = troca