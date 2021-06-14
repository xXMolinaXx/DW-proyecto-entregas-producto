import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  opcion:number = 1;

  cambiarOpcion(id:number){
    this.opcion=id
  }
}
