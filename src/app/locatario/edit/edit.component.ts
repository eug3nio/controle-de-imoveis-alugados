import { Locatario } from './../../model/locatario';
import { Component } from '@angular/core';

import * as M from 'materialize-css';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-locatario',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditLocatarioComponent {
  locatarioEdit: Locatario = new Locatario();
  dtNascimentoEdit!: string | null;

  constructor(public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.dtNascimentoEdit = this.datepipe.transform(
      this.locatarioEdit.dtNascimento,
      'dd/MM/yyyy'
    );
  }

  ngAfterViewInit(): void {
    var elemsSelect = document.querySelectorAll('select');
    M.FormSelect.init(elemsSelect, {});

    var elemsDatepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elemsDatepicker, { format: 'dd/mm/yyyy' });
  }

  onChangeDtNascimento() {
    if (this.dtNascimentoEdit != null) {
      let dtNascimentoSplit = this.dtNascimentoEdit.split('');
      this.locatarioEdit.dtNascimento = new Date(
        `${dtNascimentoSplit[0]}${dtNascimentoSplit[1]}/${dtNascimentoSplit[2]}${dtNascimentoSplit[3]}/${dtNascimentoSplit[4]}${dtNascimentoSplit[5]}${dtNascimentoSplit[6]}${dtNascimentoSplit[7]}`
      );
    }
  }

  onSubmit() {
    M.toast({ html: 'Locatario salvo com sucesso!' });
  }
}
