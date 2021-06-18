import { AppComponent } from './../app.component';
import { Component, Host, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
  }
  
}
