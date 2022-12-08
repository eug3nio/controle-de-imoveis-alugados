import { AgrupadorLinhaConteudo } from "./agrupador-linha-conteudo";

export class AgrupadorLinha {
  private _id: number;
  private _conteudos: AgrupadorLinhaConteudo[];

  constructor(id: number, conteudos: AgrupadorLinhaConteudo[]) {
    this._id = id;
    this._conteudos = conteudos;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get conteudos() {
    return this._conteudos;
  }

  set conteudos(conteudos: AgrupadorLinhaConteudo[]) {
    this._conteudos = conteudos;
  }
}
