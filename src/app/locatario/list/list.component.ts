import { ConteudoAgrupador } from './../../model/conteudoAgrupador';
import { Locatario } from './../../model/locatario';
import { Component } from '@angular/core';
import * as M from 'materialize-css';
import { Agrupador } from 'src/app/model/agrupador';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
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

  editarLocatario(id: number) {
    M.toast({ html: `Editando o id ${id}` });
    this.router.navigate(['/locatario/edit', id]);
  }

  deletarLocatario(id: number) {
    M.toast({ html: `Deletando o id ${id}` });
  }
}
