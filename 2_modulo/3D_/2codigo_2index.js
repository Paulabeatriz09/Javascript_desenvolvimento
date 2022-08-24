var readline=require('readline-sync');
var aluno="";
var n1=0;
var n2=0;
var n3=0;
var soma=0;
var falta=0;

//Entrada de dados
console.log('Seja bem vindo ao sistema de cálculo de média escolar');
aluno=readline.question("Informe o seu nome: ");
n1=parseFloat(readline.question("Informe a primeira nota: "));
n2=parseFloat(readline.question("Informe a segunda nota: "));
n3=parseFloat(readline.question("Informe a terceira nota: "));


//Calculo da soma
soma=n1+n2+n3;
falta=21-soma;


if(soma<21 && falta<=10){
    console.log(aluno+" Infelizmente você está em recuperação e precisa tirar "+falta+" para passar.");
}

if(soma>=21){
    console.log(aluno+" Parabéns você está aprovado");
}
if(falta>10){
    console.log("Infelizmente você está reprovado e não será possível fazer a recuperação");
}