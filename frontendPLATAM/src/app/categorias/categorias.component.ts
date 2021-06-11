import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  arreglo:any=[1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
  }

}
