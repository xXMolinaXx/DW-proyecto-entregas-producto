import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-empresa',
  templateUrl: './productos-empresa.component.html',
  styleUrls: ['./productos-empresa.component.css']
})
export class ProductosEmpresaComponent implements OnInit {
  arreglo:any=[1,2,3,4,5]
  infoNegocio:any='';
  constructor(private _router:Router,private httpclient:HttpClient,private route: ActivatedRoute) {
    this.mostrarArreglo();
   }

  ngOnInit(): void {
    if(sessionStorage.getItem('id')==null){
      this._router.navigate(['/']);
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

}
