import { Imovel } from './imovel';
import { Locatario } from './locatario';
export class Contrato {
  private _id!: number;
  private _locatario!: Locatario;
  private _imovel!: Imovel;
  private _valorAluguel!: number;
  private _inicioContrato!: Date;
  private _fimContrato!: Date;
  private _ativo: boolean;
  private _tsInclusao: Date;
  private _tsAlteracao!: Date;

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

  get locatario() {
    return this._locatario;
  }

  set locatario(_locatario: Locatario) {
    this._locatario = _locatario;
  }

  get imovel() {
    return this._imovel;
  }

  set imovel(imovel: Imovel) {
    this._imovel = imovel;
  }

  get inicioContrato() {
    return this._inicioContrato;
  }

  set inicioContrato(inicioContrato: Date) {
    this._inicioContrato = inicioContrato;
  }

  get fimContrato() {
    return this._fimContrato;
  }

  set fimContrato(fimContrato: Date) {
    this._fimContrato = fimContrato;
  }

  get ativo() {
    return this._ativo;
  }

  set ativo(ativo: boolean) {
    this._ativo = ativo;
  }

  get valorAluguel() {
    return this._valorAluguel;
  }

  set valorAluguel(valorAluguel: number) {
    this._valorAluguel = valorAluguel;
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
