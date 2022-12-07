export class Imovel {
  id!: number;
  logradouro!: string;
  numero!: number;
  complemento!: string;
  bairro!: string;
  estado!: string;
  municipio!: string;
  valorBaseAluguel!: number;
  tsInclusao: Date;
  tsAlteracao!: Date;
  ativo: boolean;

  constructor() {
    this.ativo = true;
    this.tsInclusao = new Date();
  }
}
