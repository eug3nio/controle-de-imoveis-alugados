import { AgrupadorLinha } from './agrupador-linha';

export class Agrupador {
  private _headerColuna!: string[];
  private _linhas!: AgrupadorLinha[];

  constructor() {}

  get headerColuna() {
    return this._headerColuna;
  }

  set headerColuna(headerColuna: string[]) {
    this._headerColuna = headerColuna;
  }

  get linhas() {
    return this._linhas;
  }

  set linhas(linhas: AgrupadorLinha[]) {
    this._linhas = linhas;
  }
}
