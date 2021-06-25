import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  numeroListaProductos=0;
  session:any;
  mostrar=true;
  constructor() { }

  ngOnInit(): void {
     this.session=sessionStorage.getItem('pedidos');
    this.session=JSON.parse(this.session);
    for(let el of this.session){
      this.numeroListaProductos+=el.cantidad;
    }
    
  }

  cerrarSeccion(){
    sessionStorage.removeItem('id');
    location.reload();
  }
}
