//Crie um exemplo que utiliza os operadores rest e spread


let bermuda = ['jeans', 'sarja'];
let camisetas = ['polo','manga curta'];
let sapatos = ['Tenis','chinelo'];

let estoque = [...bermuda,...camisetas,...sapatos];

const exporVitrine = (...itens) => {
    itens.forEach(item => console.log(`item ${item} exposto na vitrine`));

}

exporVitrine(...estoque);