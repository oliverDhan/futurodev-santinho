//condicionais
somar(6);
function somar(limite){
    let multiplosde3 = 0;
    for (i = 0; i <=limite; i++){
        if(i %3 === 0)
        multiplosde3 += i;
    }
    console.log(multiplosde3, "é multiplo de 3")
}