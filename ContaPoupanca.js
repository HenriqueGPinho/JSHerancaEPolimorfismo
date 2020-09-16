import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(agencia, cliente) {
    super(agencia, cliente);
    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = 0;
    Conta.numeroDeContas += 1;
  }
}