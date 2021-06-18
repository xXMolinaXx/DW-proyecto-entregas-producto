import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-formulario-ingreso',
  templateUrl: './formulario-ingreso.component.html',
  styleUrls: ['./formulario-ingreso.component.css']
})
export class FormularioIngresoComponent implements OnInit {
  correo:string='';
  contrasena:string='';
  mostrar=false;
  number=new Number(0);
  constructor(private httpclient:HttpClient,private _router:Router) { }

  ngOnInit(): void {
  }

  entrar(){
    this.httpclient.post('http://localhost:8888/usuarios/entrar',{correo:this.correo,contrasena:this.contrasena})
    .subscribe((res:any)=>{
      
      if(res.id=='ninguno'){
        console.log('contrasena o correo incorrectos');
        this.mostrar=true;
      }else{
      
        this.number=res.id;
        sessionStorage.setItem('id',this.number.toString()); 
        this._router.navigate(['/categorias']);
      }
      
    })
  }

}
