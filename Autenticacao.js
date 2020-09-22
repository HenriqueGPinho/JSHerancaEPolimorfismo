export class Autenticacao {
  static login(autenticavel, senha) {
    if (Autenticacao.testarAutenticacao(autenticavel)) {
      return autenticavel.autenticar(senha);
    }

    return false;
  }

  static testarAutenticacao(autenticavel) {
    return 'autenticar' in autenticavel && 
      autenticavel.autenticar instanceof Function;
  }
}