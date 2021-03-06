import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  arreglo:any=[];
  url:string='';
  constructor(private httpclient:HttpClient,private route: ActivatedRoute,private _router:Router) {
    this.mostrarArreglo();
   }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))//asi se usan los parametros en la url
    
    if(sessionStorage.getItem('id')==null){
      this._router.navigate(['/']);
    }
  }
  mostrarArreglo(){
    
      this.httpclient.get('http://localhost:8888/categorias')
      .subscribe((res)=>{
      this.arreglo=res;
      //this.url='categorias/comercios/'+this.route.snapshot.paramMap.get('id');
      }) 
}

}
