/*var a = 12;
var b = a / 2;
var result = b % 2 == 0 ? 'par':'impar';

console.log(b + ' é ' + result)*/

/*var data = new Date();
var dia = data.getDay();

switch (dia) {
  case 0:
    console.log("final de semana");
    break;
  case 5:
    console.log("Sextou");
    break;
  default:
    console.log("Trabalho e estudo");
}

var nota1 = 4;
var nota2 = 4;
var media = (nota1 + nota2) / 2;

 switch (true) {
  case media < 4:
    console.log("Media", media, "satus: Reprovado");
    break;
  case media >= 4 && media < 7:
    console.log("Media ", media, "status: Recuperação");
    break;
  default:
    console.log("Media ", media, "satatus: aprovado!!");
}

for(var contador = 0; contador <=10; contador ++){
    console.log("<p>" + contador+ "</p>");
}
var nomes   = ['Ana', 'Julia', 'Paulo']
for(var i = 0; i < nomes.length; i++){
    console.log("<p>"+nomes[i]+"</p>");
}

for (var i = 1; i <= 10; i++) {
  var result = "5*" + i + "=" + 5 * i;
  console.log(result);
}

var i = 1;
do{
    var mult = i *5;
    console.log("resultado "+ mult + "!")
    i++;
}while(i<=10)*/


//exercicio 
var soma = 0
for(var i=0; i<=100; i++){
    if(i%5==0){
        continue;
    }
    soma+= i
}
console.log(soma);