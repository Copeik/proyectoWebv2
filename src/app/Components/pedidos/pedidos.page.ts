import { PedidosService } from './../../services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/model/Pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos:Array<Pedidos>;
  constructor(private pedidosService:PedidosService) { }

  ngOnInit() {
    this.cargarPedidos();
  }
  cargarPedidos(){
    this.pedidosService.getallByAdmin().subscribe( res => {
      this.pedidos = res
    });
  }
}
