//Laços com desvio

var soma = 0;
for(var i=0; i <=100; i++){
    if(i%5==0){
        continue;
    }
    soma += i;
}

console.log(soma);