export class Usuario {
  id!: number;
  nome?: string;
  email: string;
  senha: string;
  cpf?: string;
  dtNascimento?: Date;
  isAdmin: boolean;

  constructor(email: string, senha: string, isAdmin: boolean = false) {
    this.id = Math.round(Math.random() * 1000);
    this.email = email;
    this.senha = senha;
    this.isAdmin = isAdmin;
  }

  public static clone(user: Usuario) {
    let u: Usuario = new Usuario(user.email, user.senha, user.isAdmin);
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
    let u: Usuario = new Usuario(user.email, user.senha, user.isAdmin);
    u.nome = user.nome;
    u.cpf = user.cpf;
    u.dtNascimento = user.dtNascimento;
    return u;
  }
}
