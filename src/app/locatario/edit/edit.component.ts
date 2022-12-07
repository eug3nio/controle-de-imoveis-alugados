import { LocatarioStorageService } from './../locatario-storage.service';
import { Locatario } from './../../model/locatario';
import { Component } from '@angular/core';

import * as M from 'materialize-css';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-edit-locatario',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [LocatarioStorageService],
})
export class EditLocatarioComponent {
  title: string = '';
  locatarioEdit: Locatario = new Locatario();
  dtNascimentoEdit!: string | null;

  constructor(
    private locatarioStorageService: LocatarioStorageService,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    var elemsSelect = document.querySelectorAll('select');
    M.FormSelect.init(elemsSelect, {});

    Shared.initializeWebStorage();

    let id = this.route.snapshot.params['id'];
    if (id === undefined) {
      this.title = 'Cadastro de Locatario';
    } else {
      let buscaLocatario = this.locatarioStorageService.getById(id);
      console.log(buscaLocatario);
      if (buscaLocatario != undefined) {
        this.locatarioEdit = buscaLocatario;
        this.title = 'Edição de Locatario';
      } else {
        this.locatarioEdit = new Locatario();
        this.title = 'Cadastro de Locatario';
      }
    }

    this.dtNascimentoEdit = this.datepipe.transform(
      this.locatarioEdit.dtNascimento,
      'dd/MM/yyyy'
    );
  }

  ngAfterViewInit(): void {}

  onChangeDtNascimento() {
    if (this.dtNascimentoEdit != null) {
      let dtNascimentoSplit = this.dtNascimentoEdit.split('');
      this.locatarioEdit.dtNascimento = new Date(
        `${dtNascimentoSplit[0]}${dtNascimentoSplit[1]}/${dtNascimentoSplit[2]}${dtNascimentoSplit[3]}/${dtNascimentoSplit[4]}${dtNascimentoSplit[5]}${dtNascimentoSplit[6]}${dtNascimentoSplit[7]}`
      );
    }
  }

  onSubmit() {
    if (this.locatarioEdit.id === 0) {
      this.locatarioEdit.id = Math.round(Math.random() * 1000);
      this.locatarioStorageService.save(this.locatarioEdit);
      M.toast({ html: 'Locatario salvo com sucesso!' });
      this.title = 'Edição de Locatario';
    } else {
      this.locatarioEdit.tsAlteracao = new Date();
      this.locatarioStorageService.update(this.locatarioEdit);
      M.toast({ html: 'Alterado salvo com sucesso!' });
    }
  }
}
