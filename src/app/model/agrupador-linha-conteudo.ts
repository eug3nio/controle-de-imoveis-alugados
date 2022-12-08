export class AgrupadorLinhaConteudo {
  conteudo: any;
  ehCpf: boolean = false;

  constructor(conteudo: any, ehCpf: boolean) {
    this.conteudo = conteudo;
    this.ehCpf = ehCpf;
  }
}
