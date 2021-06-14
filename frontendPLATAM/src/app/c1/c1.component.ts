import { AppComponent } from './../app.component';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  @Output() cambiarComponenete=new EventEmitter<number>();
  constructor(/*@Host() private _app:AppComponent*/)//inyectando asi podemos acceder al componente padre
   { }

  ngOnInit(): void {
  }
  
}
