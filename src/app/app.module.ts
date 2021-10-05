import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';
import { AuditoriasModule } from './paginas/auditorias/auditorias.module';
import { EstamosFazendoModule } from './paginas/estamos-fazendo/estamos-fazendo.module';
import { InstitucionalModule } from './paginas/institucional/institucional.module';
import { ConveniosModule } from './paginas/convenios/convenios.module';
import { MenuService } from './core/header/menu/menu.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    AuditoriasModule,
    EstamosFazendoModule,
    InstitucionalModule,
    ConveniosModule

  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
