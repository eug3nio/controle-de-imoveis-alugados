import { ConteudoAgrupador } from './conteudoAgrupador';

export class Agrupador {
  private _headerColuna!: string[];
  private _conteudo!: ConteudoAgrupador[];

  constructor() {}

  get headerColuna() {
    return this._headerColuna;
  }

  set headerColuna(headerColuna: string[]) {
    this._headerColuna = headerColuna;
  }

  get conteudo() {
    return this._conteudo;
  }

  set conteudo(conteudo: ConteudoAgrupador[]) {
    this._conteudo = conteudo;
  }
}
