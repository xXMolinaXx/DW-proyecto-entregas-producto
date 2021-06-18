import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('id')==null){
      this._router.navigate(['/']);
    }
  }

}
