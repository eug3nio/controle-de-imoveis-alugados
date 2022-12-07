export class Locatario {
  id!: number;
  nomeCompleto!: string;
  email!: string;
  fone!: string;
  cpf!: string;
  dtNascimento!: Date;
  utilizaSeguroFianca: boolean = false;
  sexo: string = Locatario.MASCULINO;
  estadoCivil: string = "1";
  tsInclusao: Date;
  tsAlteracao!: Date;

  constructor() {
    this.id = 0;
    this.tsInclusao = new Date();
  }

  static get MASCULINO() {
    return "1";
  }

  static get FEMININO() {
    return "2";
  }
}
