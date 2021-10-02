import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.routing.module';
import { EstamosFazendoRoutes } from './paginas/estamos-fazendo/estamos-fazendo-routing.module';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'inicio',
		pathMatch: 'full'
	},
  ...HomeRoutes,
  ...EstamosFazendoRoutes


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
