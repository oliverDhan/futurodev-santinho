//Desestruturamento de objeto   

let jdm = {
    carro: 'HONDA civic VTi ',
    idade: 1993,
    cor:'Branco gelo'
}

let {carro, idade, cor} = jdm;
const apresentaJDM = ({carro, idade, cor}) =>{
    console.log(`O jdm do momento é o  ${carro}, ano ${idade} e cor ${cor}.`)
}

apresentaJDM(jdm);