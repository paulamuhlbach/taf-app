import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TafMaterialModule } from '../taf-material.module'
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormConsultaPortalComponent } from './header/form-consulta-portal/form-consulta-portal.component';
import { MapaSiteComponent } from './mapa-site/mapa-site.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TafDatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FormConsultaPortalComponent,
    MapaSiteComponent,
    BreadcrumbComponent,
    TafDatepickerComponent

  ],
  imports: [
    CommonModule,
    TafMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MapaSiteComponent,
    TafMaterialModule,
    BreadcrumbComponent,
    TafDatepickerComponent,
    FormsModule
  ],
  bootstrap: [HeaderComponent],
})
export class CoreModule { }
