import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgInicioComponent } from './pg-inicio/pg-inicio.component';


export const routes: Routes = [
        { path: '', component: PgInicioComponent },

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class HomeRoutingModule { }
