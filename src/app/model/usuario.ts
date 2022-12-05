export class Usuario {
  id!: number;
  nome?: string;
  username: string;
  senha: string;
  cpf?: string;
  dtNascimento?: Date;
  isAdmin: boolean;

  constructor(username: string, senha: string, isAdmin: boolean = false) {
    this.id = Math.round(Math.random() * 1000);
    this.username = username;
    this.senha = senha;
    this.isAdmin = isAdmin;
  }

  public static clone(user: Usuario) {
    let u: Usuario = new Usuario(user.username, user.senha, user.isAdmin);
    u.nome = user.nome;
    u.cpf = user.cpf;
    u.dtNascimento = user.dtNascimento;
    return u;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param user
   * @returns
   */
  public static toWS(user: Usuario) {
    let u: Usuario = new Usuario(user.username, user.senha, user.isAdmin);
    u.nome = user.nome;
    u.cpf = user.cpf;
    u.dtNascimento = user.dtNascimento;
    return u;
  }
}
