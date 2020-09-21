// classe abstrata (superclasse que não é instanciada nunca)
export class Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia, saldoInicial) {
    if (this.constructor == Conta) {
      throw new Error("Você não deve instanciar a classe Conta diretamente");
    }

    this._cliente = cliente;
    this._agencia = agencia;
    this._saldo = saldoInicial;
  }


  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // método abstrato 
  sacar(valor) {
    throw new Error("O método sacar precisa ser sobreescrito na classe especializada");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}