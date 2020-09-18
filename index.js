import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001, 0);
const contaPoupancaRicardo = new ContaPoupanca(cliente1, 1001, 0);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
contaPoupancaRicardo.depositar(500);
contaPoupancaRicardo.sacar(100);

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);
console.log(Conta.numeroDeContas);