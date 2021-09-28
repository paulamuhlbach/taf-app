import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TafMaterialModule } from '../taf-material.module'
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormConsultaPortalComponent } from './header/form-consulta-portal/form-consulta-portal.component';
import { MapaSiteComponent } from './mapa-site/mapa-site.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FormConsultaPortalComponent,
    MapaSiteComponent,
    BreadcrumbComponent

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
    TafMaterialModule,
    BreadcrumbComponent
  ],
  bootstrap: [HeaderComponent],
})
export class CoreModule { }
