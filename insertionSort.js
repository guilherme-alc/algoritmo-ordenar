const livros = require('./listaLivro');
const troca = require('./troca')

function insertionSort(arr) {
	for(let i = 0; i < arr.length; i++){
		let analise = i; // atribuindo um nome diferente para variável para melhor compreensão
		while (analise > 0 && arr[analise].preco < arr[analise - 1].preco) { 
		// para executar o while as duas condições separadas por "&&"" devem ser verdadeiras"
			troca(arr, analise)
			analise--
		}
	}
	console.log(arr)
}

//cada vez que a condição do while retornar true e executar o comando a variável analise do for será decrementada e irá realizar mais uma repetição, mas se retornar false, não vai fazer nada e o for irá realizar mais uma repetição incrementando mais 1 pra variável analise

insertionSort(livros);