export class Locatario {
  private _id!: number;
  private _nomeCompleto!: string;
  private _email!: string;
  private _fone!: string;
  private _cpf!: string;
  private _dtNascimento!: Date;
  private _utilizaSeguroFianca: boolean = false;
  private _sexo!: number;
  private _estadoCivil!: number;
  private _tsInclusao: Date;
  private _tsAlteracao!: Date;

  constructor() {
    this._tsInclusao = new Date();
  }

  static get MASCULINO() {
    return 1;
  }

  static get FEMININO() {
    return 2;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get nomeCompleto() {
    return this._nomeCompleto;
  }

  set nomeCompleto(nomeCompleto: string) {
    this._nomeCompleto = nomeCompleto;
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get fone() {
    return this._fone;
  }

  set fone(fone: string) {
    this._fone = fone;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get dtNascimento() {
    return this._dtNascimento;
  }

  set dtNascimento(dtNascimento: Date) {
    this._dtNascimento = dtNascimento;
  }

  get utilizaSeguroFianca() {
    return this._utilizaSeguroFianca;
  }

  set utilizaSeguroFianca(utilizaSeguroFianca: boolean) {
    this._utilizaSeguroFianca = utilizaSeguroFianca;
  }

  get sexo() {
    return this._sexo;
  }

  set sexo(sexo: number) {
    this._sexo = sexo;
  }

  get estadoCivil() {
    return this._estadoCivil;
  }

  set estadoCivil(estadoCivil: number) {
    this._estadoCivil = estadoCivil;
  }

  get tsInclusao() {
    return this._tsInclusao;
  }

  get tsAlteracao() {
    return this._tsAlteracao;
  }

  set tsAlteracao(tsAlteracao: Date) {
    this._tsAlteracao = tsAlteracao;
  }
}
