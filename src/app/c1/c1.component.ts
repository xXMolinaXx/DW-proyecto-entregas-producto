import { AppComponent } from './../app.component';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
nombre:string='';
apellido:string='';
correo:string='';
contrasena:string='';
  constructor(private httpclient:HttpClient,private _router:Router)
   { }

  ngOnInit(): void {
  }
  crearNuevoUsuario(){
    this.httpclient.post('http://localhost:8888/usuarios',{nombre:this.nombre,apellido:this.apellido,correo:this.correo,contrasena:this.contrasena})
    .subscribe((res)=>{
      this._router.navigate(['/registro']);
    })
  }
    
  
}
