const precosLivros = [
    {
        titulo: "JavaScript",
        preco: 25,
    },
    {
        titulo: "PHP",
        preco: 15,
    },
    {
        titulo: "Java",
        preco: 30,
    },
    {
        titulo: "Elixir",
        preco: 50,
    },
    {
        titulo: "Go",
        preco: 45,
    },
    {
        titulo: "Python",
        preco: 20,
    },
    {
        titulo: "Ruby",
        preco: 14.99
    }
]

// forma de ordenar por preço pelo método sort
// const resultado = precosLivros.sort((a, b) => {
//     if (a["preco"] < b["preco"]) {
//         return -1
//     }

//     if (a["preco"] > b["preco"]) {
//         return 1
//     }

//     return 0
// })
// console.log(resultado)

module.exports = precosLivros