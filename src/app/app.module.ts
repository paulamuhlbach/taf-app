import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';
import { EstamosFazendoModule } from './paginas/estamos-fazendo/estamos-fazendo.module';
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
    EstamosFazendoModule,

  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
