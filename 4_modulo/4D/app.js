const express=require('express');
const app=express();

const db=require('./models/db.js');

app.get("/",async(req,res)=>{
    res.send("Página Inicial - Paula")
});

app.listen(8080,()=>{
    console.log("Conectado com sucesso");
})