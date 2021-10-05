import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { TafMaterialModule } from '../../taf-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuditoriasComponent } from './auditorias.component';



@NgModule({
  declarations: [AuditoriasComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    TafMaterialModule,
    SharedModule
  ]
})
export class AuditoriasModule { }
