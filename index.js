import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
new ContaPoupanca(1001, cliente1);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

console.log(contaCorrenteRicardo);
console.log(Conta.numeroDeContas);