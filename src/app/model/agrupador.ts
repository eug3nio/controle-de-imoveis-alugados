import { ConteudoAgrupador } from './conteudoAgrupador';

export class Agrupador {
  private _headerColuna!: string[];
  private _ids!: number[];
  private _conteudo!: ConteudoAgrupador[];

  constructor() {}

  get headerColuna() {
    return this._headerColuna;
  }

  set headerColuna(headerColuna: string[]) {
    this._headerColuna = headerColuna;
  }

  get ids() {
    return this._ids;
  }

  set ids(_ids: number[]) {
    this._ids = _ids;
  }

  get conteudo() {
    return this._conteudo;
  }

  set conteudo(conteudo: ConteudoAgrupador[]) {
    this._conteudo = conteudo;
  }
}
