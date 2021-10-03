import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { EstamosFazendoComponent } from './estamos-fazendo.component';
import { AcoesProgramasComponent } from './acoes-programas/acoes-programas.component';
import { CartaServicosComponent } from './carta-servicos/carta-servicos.component';
import { GastometroComponent } from './gastometro/gastometro.component';
import { ProgramasFinanciadosComponent } from './programas-financiados/programas-financiados.component';
import { RouterModule } from '@angular/router';
import { TafMaterialModule } from '../../taf-material.module';

@NgModule({
  declarations: [
    EstamosFazendoComponent,
    AcoesProgramasComponent,
    CartaServicosComponent,
    GastometroComponent,
    ProgramasFinanciadosComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    TafMaterialModule,
    RouterModule
  ]
})
export class EstamosFazendoModule { }
