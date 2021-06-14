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
import { ProductosEmpresaComponent } from './productos-empresa/productos-empresa.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';





@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    BienvenidoComponent,
    FormularioIngresoComponent,
    HerramientasComponent,
    CategoriasComponent,
    ProductosEmpresaComponent,
    ListaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
