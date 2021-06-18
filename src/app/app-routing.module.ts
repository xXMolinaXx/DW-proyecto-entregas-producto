import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosEmpresaComponent } from './productos-empresa/productos-empresa.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ComerciosComponent } from './comercios/comercios.component';




const routes: Routes =  [
  { path: '',pathMatch:'full', component: BienvenidoComponent },
  { path: 'registro', component: C1Component },
  { path: 'ingreso', component: FormularioIngresoComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/comercios/:id', component: ComerciosComponent },
  { path: 'categoria/:id1/producto/:id2', component: ProductosEmpresaComponent },
  { path: 'lista', component: ListaProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
