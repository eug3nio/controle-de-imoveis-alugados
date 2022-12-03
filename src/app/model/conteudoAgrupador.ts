export class ConteudoAgrupador {
  private _conteudo: any;

  constructor(conteudo: any) {
    this._conteudo = conteudo;
  }

  get conteudo() {
    return this._conteudo;
  }

  set conteudo(conteudo: any) {
    this._conteudo = conteudo;
  }
}
