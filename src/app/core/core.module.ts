import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TafMaterialModule } from '../taf-material.module'
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormConsultaPortalComponent } from './header/form-consulta-portal/form-consulta-portal.component';
import { MapaSiteComponent } from './mapa-site/mapa-site.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FormConsultaPortalComponent,
    MapaSiteComponent

  ],
  imports: [
    CommonModule,
    TafMaterialModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MapaSiteComponent,
    TafMaterialModule
  ],
  bootstrap: [HeaderComponent],
})
export class CoreModule { }
