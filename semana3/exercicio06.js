// Função utilizando map

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.map(function(resultado, indice, array){
    console.log(resultado);
    console.log(indice);
    console.log(array)
    return resultado
}, 10)