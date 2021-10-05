import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.routing.module';
import { AuditoriasRoutes } from './paginas/auditorias/auditorias-routing.module';
import { EstamosFazendoRoutes } from './paginas/estamos-fazendo/estamos-fazendo-routing.module';
import { InstitucionalRoutes } from './paginas/institucional/institucional-routing.module';
import { ConveniosRoutes } from './paginas/convenios/convenios-routing.module';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'inicio',
		pathMatch: 'full'
	},
  ...HomeRoutes,
  ...EstamosFazendoRoutes,
  ...InstitucionalRoutes,
  ...ConveniosRoutes,
  ...AuditoriasRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
