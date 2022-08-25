var readline=require('readline-sync');
var n1=0;
var n2=0;
var op=""
var soma=0;
var sub=0;
var mult=0;
var res=0;


console.log("Sistema de calculadora !! ")
n1=parseFloat(readline.question("informe o primeiro numero: "));
n2=parseFloat(readline.question("Informe o segundo numero: "));
op=readline.question(" Caso deseje fazer a soma digite +\n Caso deseje subtrair digite -\n Caso deseje realizar a multiplicacao digite *\n e Caso queira ver a sobra da divisao digite %.");

soma=n1+n2;
sub=n1-n2;
mult=n1*n2;
res=n1%n2;


if(op=="+"){
    console.log("O valor da soma foi: "+soma);
}
if(op=="-"){
    console.log("O valor da subtração foi: "+sub);
}
if(op=="*"){
    console.log("O valor da multiplicação foi: "+mult);
}
if(op=="%"){
    console.log("O valor do resto da divisão foi: "+res);
}
else{
    console.log("Digite uma operação válida")
}



