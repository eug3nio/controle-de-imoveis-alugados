import { AgrupadorLinhaConteudo } from './../../model/agrupador-linha-conteudo';
import { LocatarioStorageService } from './../locatario-storage.service';
import { AgrupadorLinha } from '../../model/agrupador-linha';
import { Locatario } from './../../model/locatario';
import { Component } from '@angular/core';
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
  listaLinhas: AgrupadorLinha[] = [];
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
    this.listaLinhas = [];
    this.locatarioPromiseService.getAll().subscribe((loc) => {
      this.listaLocatarios = loc;

      if (this.listaLocatarios != undefined) {
        this.listaLocatarios.forEach((locatario) => {
          let conteudo = new AgrupadorLinha(locatario.id, [
            new AgrupadorLinhaConteudo(locatario.nomeCompleto, false),
            new AgrupadorLinhaConteudo(locatario.cpf, true),
            new AgrupadorLinhaConteudo(locatario.email, false),
            new AgrupadorLinhaConteudo(locatario.fone, false),
          ]);
          this.listaLinhas.push(conteudo);
        });

        this.agrupador.headerColuna = this.listaHeaders;
        this.agrupador.linhas = this.listaLinhas;
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
