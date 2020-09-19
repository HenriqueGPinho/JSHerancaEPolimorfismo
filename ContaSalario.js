import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(cliente, agencia, saldoInicial) {
    super(cliente, agencia, saldoInicial);
    Conta.numeroDeContas += 1;
  }

  sacar(valor) {
    let taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}