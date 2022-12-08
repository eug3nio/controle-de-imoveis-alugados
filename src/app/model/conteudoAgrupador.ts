export class ConteudoAgrupador {
  private _id: number;
  private _conteudo: any[];

  constructor(id: number, conteudo: any[]) {
    this._id = id;
    this._conteudo = conteudo;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get conteudo() {
    return this._conteudo;
  }

  set conteudo(conteudo: any[]) {
    this._conteudo = conteudo;
  }
}
