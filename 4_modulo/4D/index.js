(async()=>{
    const database=require('./cadastro');
    const produto=require('./pessoas');


    const retornoFuncao=await Pessoas.create([
        nome:'Paula'
        idade:25,
    ])
    // try{
    //     const resultado=await database.sync();
    //     console.log(resultado)
    // } catch(error){
    //     console.log(error)
    // }
})