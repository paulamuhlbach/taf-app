import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgInicioComponent } from './pg-inicio/pg-inicio.component';
import { PaginaIndisponivelComponent } from './pagina-indisponivel/pagina-indisponivel.component';


export const HomeRoutes: Routes = [
        { path: '', component: PgInicioComponent },
        { path: 'indisponivel', component: PaginaIndisponivelComponent },

  ];
