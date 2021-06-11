import { AppComponent } from './../app.component';
import { Component, Host, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  @Input() data:any; 
  /*asi se traer valores de un modulo padre ,los valores en el componenete 
  padre se pasan usando los corchetes cuadrados y ahi se coloca el nombre de @input ejemplo
  [data]='variable'

  para poder usarlo tambien se debe de importar en la primera linea
  */
  @Output() cambiarComponenete=new EventEmitter<number>();
  constructor(@Host() private _app:AppComponent)//inyectando asi podemos acceder al componente padre
   { }

  ngOnInit(): void {
  }
  mostrarInicio(){
    this._app.opcion=0
  }/*
  mostrarInicio(){
    this.cambiarComponenete.emit(0)
  }*/
}
