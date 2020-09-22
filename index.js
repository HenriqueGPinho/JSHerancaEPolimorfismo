import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Autenticacao } from "./Autenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const cliente = new Cliente("Marcelo", 12334556789, "1234567");

// const logado = Autenticacao.login(diretor, "123456");

const logado = Autenticacao.login(cliente, "1234567");

console.log(logado);