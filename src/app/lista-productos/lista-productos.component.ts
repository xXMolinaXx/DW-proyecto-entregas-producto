import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  pedidos:any='';
  subtotal=0;
  total=0
  envio=80;
  constructor(private _router:Router) { 
    this.pedidos=sessionStorage.getItem('pedidos');
    this.pedidos=JSON.parse(this.pedidos);
    console.log(this.pedidos);
    for(let el of this.pedidos){
      this.subtotal+=el.precio*el.cantidad
    }
    this.total=this.subtotal+this.envio
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('id')==null){
      this._router.navigate(['/']);
    }
  }



}
