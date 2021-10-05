import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgInicioComponent } from './pg-inicio/pg-inicio.component';
import { WidgetEstamosFazendoComponent } from './widget-estamos-fazendo/widget-estamos-fazendo.component';
import { WidgetReceitaDespesaComponent } from './widget-receita-despesa/widget-receita-despesa.component';
import { WidgetRenunciaReceitaComponent } from './widget-renuncia-receita/widget-renuncia-receita.component';
import { WidgetOrcamentoComponent } from './widget-orcamento/widget-orcamento.component';
import { PaginaIndisponivelComponent } from './pagina-indisponivel/pagina-indisponivel.component';
import { CardsInicioComponent } from './cards-inicio/cards-inicio.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PgInicioComponent,
    WidgetEstamosFazendoComponent,
    WidgetReceitaDespesaComponent,
    WidgetRenunciaReceitaComponent,
    WidgetOrcamentoComponent,
    CardsInicioComponent,
    PaginaIndisponivelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
