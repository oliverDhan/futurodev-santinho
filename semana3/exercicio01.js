//Calculadora de Salario

const imprimeSalarioEAumento = function(antes, percentual, aumento, novo){
    console.log(`Salario antes do reajuste: ${antes}`);
    console.log(`Percentual de aumento: ${percentual}`);
    console.log(`Salario antes do reajuste: ${aumento}`);
    console.log(`Novo salario: ${novo}`)
}


const CalculadoraSalario = function(salario){
    let aumento = 0 
    let novo = 0 

    switch(true){
        case(salario <= 280):
             aumento = salario * 0.2;
             novo = salario + aumento;
            imprimeSalarioEAumento(salario, '20%', aumento, novo);
            break;
        case(salario > 280 && salario <=700):
             aumento = salario * 0.15;
             novo = salario + aumento;
            imprimeSalarioEAumento(salario, '15%', aumento, novo);
            break;
        case(salario > 700 && salario <= 1500):
             aumento = salario * 0.1;
             novo = salario + aumento;
            imprimeSalarioEAumento(salario, '10%', aumento, novo);
            break;
        case(salario > 1500):
             aumento = salario * 0.05;
             novo = salario + aumento;
            imprimeSalarioEAumento(salario, '5%', aumento, novo);
            break;
    }
}

CalculadoraSalario(720);