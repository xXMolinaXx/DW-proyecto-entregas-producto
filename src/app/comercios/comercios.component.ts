import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {

  arreglo:any=[];
  idCategoria:any=''
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
    this.idCategoria=this.route.snapshot.paramMap.get('id');
      this.httpclient.get('http://localhost:8888/categorias/comercios/'+this.route.snapshot.paramMap.get('id'))
      .subscribe((res)=>{
      this.arreglo=res;
      }) 
  }

}
