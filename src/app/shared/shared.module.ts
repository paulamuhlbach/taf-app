import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { TafMaterialModule } from '../taf-material.module';
import { SelectSecretariasComponent } from './select-secretarias/select-secretarias.component';
import { DatepickerDeateComponent } from './datepicker-deate/datepicker-deate.component';
import { MenuAcoesComponent } from './menu-acoes/menu-acoes.component';
import { MenuEsferaGovernoComponent } from './menu-esfera-governo/menu-esfera-governo.component';
import { FiltroPerfilComponent } from './filtro-perfil/filtro-perfil.component';
import { FiltroAssuntoComponent } from './filtro-assunto/filtro-assunto.component';


@NgModule({
  declarations: [
    SelectSecretariasComponent,
    DatepickerDeateComponent,
    MenuAcoesComponent,
    MenuEsferaGovernoComponent,
    FiltroPerfilComponent,
    FiltroAssuntoComponent,
  ],

  imports: [
    CommonModule,
    TafMaterialModule,
    CoreModule
  ],

  exports: [
    SelectSecretariasComponent,
    DatepickerDeateComponent,
    MenuAcoesComponent,
    MenuEsferaGovernoComponent,
    FiltroPerfilComponent,
    FiltroAssuntoComponent
  ]
})
export class SharedModule { }
