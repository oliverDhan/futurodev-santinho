//Crie um async

function task(){
    return new Promise((req)=>{
        setTimeout(()=>{
            console.log('No aguardo');
            req()
        }, 3000)
    })
}
async function secondtask(){
    console.log('iniciou')
    await task()
    console.log('Terminado')
}

secondtask()