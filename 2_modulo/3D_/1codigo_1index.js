var readline=require('readline-sync');
var aluno="";
var n1=0;
var n2=0;
var n3=0;
var media=0;

//Entrada de dados
console.log('Seja bem vindo ao sistema de cálculo de média escolar');
aluno=readline.question("Informe o seu nome: ");
n1=parseFloat(readline.question("Informe a primeira nota: "));
n2=parseFloat(readline.question("Informe a segunda nota: "));
n3=parseFloat(readline.question("Informe a terceira nota: "));


//Calculo da média
media=((n1+n2+n3)/3);

console.log("Sua média é: "+media);

if(media<7){
    console.log(aluno+" Infelizmente você está reprovado");
}
else{
    console.log(aluno+" Parabéns você está aprovado");
}




