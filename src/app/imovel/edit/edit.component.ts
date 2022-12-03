import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-imovel',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditImovelComponent {
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id === undefined) {
      this.title = 'Cadastro de Imóvel';
    } else {
      this.title = 'Edição de Imóvel';
    }
  }
}
