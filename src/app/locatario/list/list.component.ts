import { LocatarioStorageService } from './../locatario-storage.service';
import { ConteudoAgrupador } from './../../model/conteudoAgrupador';
import { Locatario } from './../../model/locatario';
import { Component } from '@angular/core';
import * as M from 'materialize-css';
import { Agrupador } from 'src/app/model/agrupador';
import { ActivatedRoute, Router } from '@angular/router';
import { LocatarioPromiseService } from 'src/app/services/locatario-promise.service';

@Component({
  selector: 'app-list-locatario',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [LocatarioStorageService],
})
export class ListLocatarioComponent {
  listaHeaders = ['Nome Completo', 'CPF', 'E-mail', 'Telefone'];
  listaConteudoAgrupador: ConteudoAgrupador[] = [];
  listaLocatarios: Locatario[] | undefined = [];
  agrupador: Agrupador = new Agrupador();

  constructor(
    private locatarioPromiseService: LocatarioPromiseService,
    private locatarioStorageService: LocatarioStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  pesquisar() {
    this.agrupador = new Agrupador();
    this.listaLocatarios = [];
    this.listaConteudoAgrupador = [];
    this.locatarioPromiseService.getAll().then((loc) => {
      this.listaLocatarios = loc;

      if (this.listaLocatarios != undefined) {
        let listaConteudoAgrupador: ConteudoAgrupador[] = [];
        this.listaLocatarios.forEach((locatario) => {
          let conteudo = new ConteudoAgrupador(locatario.id, [
            locatario.nomeCompleto,
            locatario.cpf,
            locatario.email,
            locatario.fone,
          ]);
          this.listaConteudoAgrupador.push(conteudo);
        });

        console.log(this.listaConteudoAgrupador);

        this.agrupador.headerColuna = this.listaHeaders;
        this.agrupador.conteudo = this.listaConteudoAgrupador;
        console.log(this.agrupador);
      }
    });
  }

  editarLocatario(id: number) {
    this.router.navigate(['/locatario/edit', id]);
  }

  deletarLocatario(id: number) {
    this.locatarioStorageService.delete(id);
    this.pesquisar();
  }
}
