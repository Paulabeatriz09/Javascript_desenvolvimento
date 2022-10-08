function  Banco ( saldo ,  numConta ,  tipoConta ,  agencia )  {
  isso.saldo  =  saldo ;
  isso.numConta  =  numConta ;
  isso.tipoConta  =  tipoConta ;
  isso.agencia  =  agencia

  isso.buscarSaldo  =  ( )  =>  {
    devolvaisso.saldo ;
  }

  isso . buscarConta  =  ( )  =>  {
    devolvaisso.numConta ;
  }

  isso.deposito=( valorDeposito )  =>  {
    devolvaisso.saldo +=  valorDeposito ;
  }

  isso.saque  =  ( valorSacado )  =>  {
    devolvaisso . saldo  -=  valorSacado ;
  }
}

const conta1=novoBanco(1300 ,"78435-08","corrente",5864 ) ;
consola.log ( conta1 . buscarSaldo ( ) ) ;
consola.log ( conta1 . buscarConta ( ) ) ;

conta1.depósito(60) ;
consola.log(conta1.buscarSaldo ( ) ) ;

conta1.saque(660 ) ;
consola.log(conta1.buscarSaldo ( ) ) ;