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
    data: { breadcrumb: 'inicio' }
	}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
