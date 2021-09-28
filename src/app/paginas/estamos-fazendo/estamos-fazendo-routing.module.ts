import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstamosFazendoComponent } from './estamos-fazendo.component';
import { CartaServicosComponent } from './carta-servicos/carta-servicos.component';
import { AcoesProgramasComponent } from './acoes-programas/acoes-programas.component';


export const routes: Routes = [
        { path: '', component: EstamosFazendoComponent,
          children: [
            { path: './carta-servicos', component: CartaServicosComponent },
            { path: './acoes-programas', component: AcoesProgramasComponent },
          ]},


  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class EstamosFazendoRoutingModule { }
