import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/inicio',
		pathMatch: 'full'
	},

	{
		path:'inicio',
		loadChildren: './home/home.module#HomeModule',
    //data: { breadcrumb: 'inicio' }
	},

	{
		path:'estamos-fazendo',
		loadChildren: './paginas/estamos-fazendo/estamos-fazendo.module#EstamosFazendoModule',
    //data: { breadcrumb: 'estamos-fazendo' }
	}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
