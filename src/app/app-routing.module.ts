import { EditLocacaoComponent } from './locacao/edit/edit.component';
import { ListImovelComponent } from './imovel/list/list.component';
import { EditImovelComponent } from './imovel/edit/edit.component';
import { EditLocatarioComponent } from './locatario/edit/edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLocatarioComponent } from './locatario/list/list.component';
import { ListLocacaoComponent } from './locacao/list/list.component';

const routes: Routes = [
  { path: 'locatario/edit/:id', component: EditLocatarioComponent },
  { path: 'locatario/edit', component: EditLocatarioComponent },
  { path: 'locatario/list', component: ListLocatarioComponent},
  { path: 'imovel/edit/:id', component: EditImovelComponent },
  { path: 'imovel/edit', component: EditImovelComponent },
  { path: 'imovel/list', component: ListImovelComponent },
  { path: 'contrato/edit/:id', component: EditLocacaoComponent },
  { path: 'contrato/edit', component: EditLocacaoComponent },
  { path: 'contrato/list', component: ListLocacaoComponent },
  { path: '', redirectTo: 'locatario', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
