import { Articulos } from './../../model/Articulo';
import { ArticulosService } from './../../services/articulos.service';
import { PedidosService } from './../../services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.page.html',
  styleUrls: ['./articulos.page.scss'],
})
export class ArticulosPage implements OnInit {

  lista:Array<Articulos>=[]

  constructor(private articulosService:ArticulosService,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.articulosService.getAllItems().subscribe(res =>{
      this.lista = res
    })
  }

}
