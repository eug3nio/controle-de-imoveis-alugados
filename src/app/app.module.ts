import { DatePipe } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditImovelComponent } from './imovel/edit/edit.component';
import { ListImovelComponent } from './imovel/list/list.component';

import { EditLocacaoComponent } from './locacao/edit/edit.component';
import { ListLocacaoComponent } from './locacao/list/list.component';

import { EditLocatarioComponent } from './locatario/edit/edit.component';
import { ListLocatarioComponent } from './locatario/list/list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ListagemComponent } from './shared/listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    EditImovelComponent,
    ListImovelComponent,
    EditLocacaoComponent,
    ListLocacaoComponent,
    EditLocatarioComponent,
    ListLocatarioComponent,
    MenuComponent,
    FooterComponent,
    ListagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
