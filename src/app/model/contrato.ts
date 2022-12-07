import { Imovel } from './imovel';
import { Locatario } from './locatario';
export class Contrato {
  id!: number;
  locatario!: Locatario;
  imovel!: Imovel;
  valorAluguel!: number;
  inicioContrato!: Date;
  fimContrato!: Date;
  ativo: boolean;
  tsInclusao: Date;
  tsAlteracao!: Date;

  constructor() {
    this.ativo = true;
    this.tsInclusao = new Date();
  }
}
