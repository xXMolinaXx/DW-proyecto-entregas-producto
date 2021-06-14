import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-empresa',
  templateUrl: './productos-empresa.component.html',
  styleUrls: ['./productos-empresa.component.css']
})
export class ProductosEmpresaComponent implements OnInit {
  arreglo=[1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

}
