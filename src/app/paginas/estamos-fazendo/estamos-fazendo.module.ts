import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstamosFazendoComponent } from './estamos-fazendo.component';
import { EstamosFazendoRoutingModule } from './estamos-fazendo-routing.module';


@NgModule({
  declarations: [EstamosFazendoComponent],
  imports: [
    CommonModule,
    EstamosFazendoRoutingModule
  ]
})
export class EstamosFazendoModule { }
