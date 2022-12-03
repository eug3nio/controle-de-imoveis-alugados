import { ConteudoAgrupador } from './../../model/conteudoAgrupador';
import { Locatario } from './../../model/locatario';
import { Component } from '@angular/core';
import * as M from 'materialize-css';
import { Agrupador } from 'src/app/model/agrupador';

@Component({
  selector: 'app-list-locatario',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListLocatarioComponent {
  listaHeaders = ['Nome Completo', 'CPF', 'E-mail', 'Telefone'];
  listaConteudoAgrupador: ConteudoAgrupador[] = [];
  listaLocatarios: Locatario[] = [];
  agrupador: Agrupador = new Agrupador();

  constructor() {}

  ngOnInit(): void {
    this.listaLocatarios.push(new Locatario());
    let listaNomeCompleto: ConteudoAgrupador[] = [];
    let listaCpf: ConteudoAgrupador[] = [];
    let listaEmail: ConteudoAgrupador[] = [];
    let listaTelefone: ConteudoAgrupador[] = [];

    listaNomeCompleto.push(
      new ConteudoAgrupador(
        this.listaLocatarios.map((item) => item.nomeCompleto)
      )
    );
    listaCpf.push(
      new ConteudoAgrupador(this.listaLocatarios.map((item) => item.cpf))
    );
    listaEmail.push(
      new ConteudoAgrupador(this.listaLocatarios.map((item) => item.email))
    );
    listaTelefone.push(
      new ConteudoAgrupador(this.listaLocatarios.map((item) => item.fone))
    );

    this.listaConteudoAgrupador =
      this.listaConteudoAgrupador.concat(listaNomeCompleto);
    this.listaConteudoAgrupador = this.listaConteudoAgrupador.concat(listaCpf);
    this.listaConteudoAgrupador =
      this.listaConteudoAgrupador.concat(listaEmail);
    this.listaConteudoAgrupador =
      this.listaConteudoAgrupador.concat(listaTelefone);

    this.agrupador.ids = this.listaLocatarios.map((item) => item.id);
    this.agrupador.headerColuna = this.listaHeaders;
    this.agrupador.conteudo = this.listaConteudoAgrupador;
  }

  editarLocatario(id: any) {
    M.toast({ html: `Editando o id ${id}` });
  }

  deletarLocatario(id: any) {
    M.toast({ html: `Deletando o id ${id}` });
  }
}
