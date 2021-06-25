import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-productos-empresa',
  templateUrl: './productos-empresa.component.html',
  styleUrls: ['./productos-empresa.component.css']
})
export class ProductosEmpresaComponent implements OnInit {
  arreglo:any=[1,2,3,4,5]
  infoNegocio:any='';
  mostrar=false;
  pedidos:any=[];
  idProducto=0;
  cantidadProductos:number=0
  constructor(private _router:Router,private httpclient:HttpClient,private route: ActivatedRoute) {
    this.mostrarArreglo();
    
   }

  ngOnInit(): void {
    if(sessionStorage.getItem('id')==null){
      this._router.navigate(['/']);
    }
    if(sessionStorage.getItem('pedidos')==null){
      sessionStorage.setItem('pedidos','[]')
    }
  }

  mostrarArreglo(){
    console.log('codigos en pagina productos')
    console.log(this.route.snapshot.paramMap.get('id1'))
    console.log(this.route.snapshot.paramMap.get('id1'))
    this.httpclient.get('http://localhost:8888/categorias/'+this.route.snapshot.paramMap.get('id1')+'/productos/'+this.route.snapshot.paramMap.get('id2'))
    .subscribe((res:any)=>{
      this.arreglo=res[0].productos;
      this.infoNegocio=res[0];
    }) 
}
agregarOrden(id:number){
  this.mostrar=true;
  this.idProducto=id
 
  
}
agregarCantidad(){
  if(this.cantidadProductos>0){
    
    
      this.arreglo[this.idProducto].cantidad=this.cantidadProductos;
      this.pedidos=sessionStorage.getItem('pedidos');
      this.pedidos=JSON.parse(this.pedidos);
      this.pedidos.push(this.arreglo[this.idProducto]);
      sessionStorage.setItem('pedidos',JSON.stringify(this.pedidos));
      this.cantidadProductos=0;
      alert('agregado a tu lista de compra ,ingresa a tu lista para terminar el pedido');
      this.mostrar=false;

    
    
  }else{
    alert('debe de colocar un numero mayor que 0')
  }
  
}
cerrar(){
  this.mostrar=false;
}

}
