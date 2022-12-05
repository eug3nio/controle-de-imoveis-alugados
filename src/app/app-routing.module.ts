import { NotauthorizedComponent } from './not-authorized/not-authorized.component';
import { AuthenticationGuard } from './util/authetication.guard';
import { EditLocacaoComponent } from './locacao/edit/edit.component';
import { ListImovelComponent } from './imovel/list/list.component';
import { EditImovelComponent } from './imovel/edit/edit.component';
import { EditLocatarioComponent } from './locatario/edit/edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLocatarioComponent } from './locatario/list/list.component';
import { ListLocacaoComponent } from './locacao/list/list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'locatario/edit/:id',
    component: EditLocatarioComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'locatario/edit',
    component: EditLocatarioComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'locatario/list',
    component: ListLocatarioComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'imovel/edit/:id',
    component: EditImovelComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'imovel/edit',
    component: EditImovelComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'imovel/list',
    component: ListImovelComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'contrato/edit/:id',
    component: EditLocacaoComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'contrato/edit',
    component: EditLocacaoComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'contrato/list',
    component: ListLocacaoComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'nao-autorizado', component: NotauthorizedComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule {}
