import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-locacao',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditLocacaoComponent {
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id === undefined) {
      this.title = 'Cadastro de Contrato';
    } else {
      this.title = 'Edição de Contrato';
    }
  }
}
