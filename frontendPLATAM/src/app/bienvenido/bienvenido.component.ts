import { AppComponent } from './../app.component';
import { Component, Host, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  opcion:number=0;
  constructor(@Host() private _app:AppComponent) {
   }

  ngOnInit(): void {
  }
  
}
