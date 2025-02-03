// 01

// var aluno = [];

// var a1 = prompt('Nome1: ');
// var a1i = parseInt(prompt('Idade1: '));
// var a1t = prompt( 'Turma1: ');
// aluno.push(a1,a1i,a1t);

// var a2 = prompt('Nome2: ');
// var a2i = parseInt(prompt('Idade2: '));
// var a2t = prompt( 'Turma2: ');
// aluno.push(a2,a2i,a2t);

// var a3 = prompt('Nome3: ');
// var a3i = parseInt(prompt('Idade3: '));
// var a3t = prompt( 'Turma3: ');
// aluno.push(a3,a3i,a3t);

// alert(`Nomes - Idades - Turmas\n[${aluno}]`)




//02


// var catalogo = [
//     { titulo: 'Vingadores: Ultimato', ano: 2019, genero: 'Ação' },
//     { titulo: 'O Rei Leão', ano: 1994, genero: 'Animação' },
//     { titulo: 'A Procura da Felicidade', ano: 2006, genero: 'Drama' },
//     { titulo: 'Se Beber, Não Case!', ano: 2009, genero: 'Comédia' },
//     { titulo: 'Jumanji: Bem-Vindo à Selva', ano: 2017, genero: 'Ação' }
// ];


// var generoBuscado = prompt('Digite um gênero (ex: Ação, Comédia, Drama):');

// var filmesFiltrados = catalogo.filter(filme => filme.genero.toLowerCase() === generoBuscado.toLowerCase());

// if (filmesFiltrados.length > 0) {
//     alert('Filmes encontrados:');
//     for (let i = 0; i < filmesFiltrados.length; i++) {
//         var filme = filmesFiltrados[i];
//         alert(`Título: ${filme.titulo}\nAno: ${filme.ano}\nGênero: ${filme.genero}`);
//     }
// } else {
//     alert('Nenhum filme encontrado para o gênero informado.');
// }





//03


var carrinho = [
    { produto: 'Camiseta', precounitario: 50 },
    { produto: 'Calça Jeans', precounitario: 80 },
    { produto: 'Tênis', precounitario: 150 }
];

let totalCarrinho = 0;
for (let i = 0; i < carrinho.length; i++) {

    var item = carrinho[i];
    var quantidade = parseInt(prompt(`Quantas unidades de ${item.produto} você deseja comprar?`));

    if (quantidade <= 0) {
        alert('Quantidade inválida! Será considerado que você não adicionou nenhuma unidade.');
        quantidade = 0; 
    }

    item.quantidade = quantidade;
    item.totalItem = item.quantidade * item.precounitario;
    totalCarrinho += item.totalItem;
}
if (totalCarrinho > 200) {
    totalCarrinho *= 0.90;
}

alert(`O valor total a pagar é: R$${totalCarrinho.toFixed(2)}`);
