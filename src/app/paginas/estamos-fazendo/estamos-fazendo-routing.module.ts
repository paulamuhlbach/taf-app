import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstamosFazendoComponent } from './estamos-fazendo.component';


export const routes: Routes = [
        { path: '', component: EstamosFazendoComponent },

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class EstamosFazendoRoutingModule { }
