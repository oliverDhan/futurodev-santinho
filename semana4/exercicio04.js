//Crie um Promisse

const firstPromisse = new Promise((req, res)=>{
    const nome = "Daniels"
    if(nome === "Daniels"){
        req('usuario Daniels encontrado');
    }else{
        res('usuario não encontrado');
    }
})

firstPromisse.then((dado)=>{
    console.log(dado);
})