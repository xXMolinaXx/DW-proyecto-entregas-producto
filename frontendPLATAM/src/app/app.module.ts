import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PruebaComponent } from './prueba/prueba.component';


const rutas: Routes = [
  { path: 'route', component: FormularioIngresoComponent },
  { path: 'route2', component: BienvenidoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    BienvenidoComponent,
    FormularioIngresoComponent,
    HerramientasComponent,
    CategoriasComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
