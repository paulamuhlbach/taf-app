import { Routes, RouterModule } from '@angular/router';
import { EstamosFazendoComponent } from './estamos-fazendo.component';
import { CartaServicosComponent } from './carta-servicos/carta-servicos.component';
import { AcoesProgramasComponent } from './acoes-programas/acoes-programas.component';
import { GastometroComponent } from './gastometro/gastometro.component';
import { ProgramasFinanciadosComponent } from './programas-financiados/programas-financiados.component';


export const EstamosFazendoRoutes: Routes = [


        {
          path: 'estamos-fazendo',
          component: EstamosFazendoComponent
        },
        {
          path: 'estamos-fazendo/carta-servicos',
          component: CartaServicosComponent
        },
        {
          path: 'estamos-fazendo/acoes-programas',
          component: AcoesProgramasComponent
        },
        {
          path: 'estamos-fazendo/gastometro',
          component: GastometroComponent
        },
        {
          path: 'estamos-fazendo/programas-financiados',
          component: ProgramasFinanciadosComponent
        },


  ];


