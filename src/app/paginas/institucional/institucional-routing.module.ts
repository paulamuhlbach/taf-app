import { Routes, RouterModule } from '@angular/router';
import { InstitucionalComponent } from './institucional.component';
import { GestoresComponent } from './gestores/gestores.component';


export const InstitucionalRoutes: Routes = [

        { path: 'institucional', component: InstitucionalComponent },
        { path: 'institucional/gestores', component: GestoresComponent }

  ];


