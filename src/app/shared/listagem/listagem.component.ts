import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
} from '@angular/core';
import { Agrupador } from 'src/app/model/agrupador';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit, OnChanges {
  @Input() agrupador!: Agrupador;
  @Input() renderedList: boolean = false;
  @Output() editItemEvent = new EventEmitter<number>();
  @Output() deleteItemEvent = new EventEmitter<number>();

  constructor() {}

  editItem(id: number) {
    this.editItemEvent.emit(id);
  }

  deleteItem(id: number) {
    this.deleteItemEvent.emit(id);
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
