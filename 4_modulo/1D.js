
// Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

// Observações:
// - buscar saldo deve retornar o valor atual do saldo;
// - para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
// - para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
// - o número da conta deve retornar o número da conta.

function Banco(conta,saldo,tipo,agencia){
    this.conta=conta;
    this.saldo=saldo;
    this.tipo=tipo;
    this.agencia;

    buscarSaldo=function SaldoValor(){
        console.log(this.saldo)
    }      
    }


var minhaConta=new Banco(1215,1255.14,"Salário")
var minhaConta={mostrarSaldo:function(saldo){}};

Banco.mostrarSaldo=SaldoValor;

Banco.buscarSaldo(saldo);







