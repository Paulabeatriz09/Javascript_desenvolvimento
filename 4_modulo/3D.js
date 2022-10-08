// <!-- Desenvolva um código e crie nele:

// - um objeto com, no mínimo, três propriedades;
// - um array de tamanho três no mínimo;
// - duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array. -->

const Pessoa={
    nome:"Juliana",
    idade:20,
    categoria:"aventura"
};

for(let prop in Pessoa){
console.log(prop);
}

const array1=[5,10,20];
for(const i of array1){
    console.log(i);
}

