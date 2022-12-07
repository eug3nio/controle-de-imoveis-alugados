import { Usuario } from './../model/usuario';
import { Constantes } from './constantes';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constantes.USERNAME_KEY) != null) {
      return;
    }

    localStorage.setItem(Constantes.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constantes.LOGGED_IN_KEY, String(false));

    localStorage.removeItem(Constantes.LOCATARIOS_KEY);
    localStorage.setItem(Constantes.LOCATARIOS_KEY, JSON.stringify([]));

    localStorage.removeItem(Constantes.IMOVEIS_KEY);
    localStorage.setItem(Constantes.IMOVEIS_KEY, JSON.stringify([]));

    localStorage.removeItem(Constantes.CONTRATOS_KEY);
    localStorage.setItem(Constantes.CONTRATOS_KEY, JSON.stringify([]));
  }
}

