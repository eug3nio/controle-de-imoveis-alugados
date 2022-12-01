import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditImovelComponent } from './imovel/edit/edit.component';
import { ListImovelComponent } from './imovel/list/list.component';

import { EditLocacaoComponent } from './locacao/edit/edit.component';
import { ListLocacaoComponent } from './locacao/list/list.component';

import { EditLocatarioComponent } from './locatario/edit/edit.component';
import { ListLocatarioComponent } from './locatario/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditImovelComponent,
    ListImovelComponent,
    EditLocacaoComponent,
    ListLocacaoComponent,
    EditLocatarioComponent,
    ListLocatarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
