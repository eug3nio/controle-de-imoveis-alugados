export class Imovel {
  private _id!: number;
  private _logradouro!: string;
  private _numero!: number;
  private _complemento!: string;
  private _bairro!: string;
  private _estado!: string;
  private _municipio!: string;
  private _valorBaseAluguel!: number;
  private _tsInclusao: Date;
  private _tsAlteracao!: Date;
  private _ativo: boolean;

  constructor() {
    this._ativo = true;
    this._tsInclusao = new Date();
  }
  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get logradouro() {
    return this._logradouro;
  }

  set logradouro(logradouro: string) {
    this._logradouro = logradouro;
  }

  get numero() {
    return this._numero;
  }

  set numero(numero: number) {
    this._numero = numero;
  }

  get complemento() {
    return this._complemento;
  }

  set complemento(complemento: string) {
    this._complemento = complemento;
  }

  get bairro() {
    return this._bairro;
  }

  set bairro(bairro: string) {
    this._bairro = bairro;
  }

  get estado() {
    return this._estado;
  }

  set estado(estado: string) {
    this._estado = estado;
  }

  get municipio() {
    return this._municipio;
  }

  set municipio(municipio: string) {
    this._municipio = municipio;
  }

  get valorBaseAluguel() {
    return this._valorBaseAluguel;
  }

  set valorBaseAluguel(valorBaseAluguel: number) {
    this._valorBaseAluguel = valorBaseAluguel;
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

  get ativo() {
    return this._ativo;
  }

  set ativo(ativo: boolean) {
    this._ativo = ativo;
  }
}
