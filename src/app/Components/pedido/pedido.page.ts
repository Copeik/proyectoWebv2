import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  Pedido;
  listaEspecificaciones;

  constructor(private pedidosService:PedidosService,private _route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.cargarPedido()
  }
  cargarPedido(){
    this.pedidosService.getallByPedido(this._route.snapshot.paramMap.get('id')).subscribe(res =>{
      this.Pedido = res[0];
      console.log( res[0]);
      this.pedidosService.getEspecificacionesByPedido(this.Pedido.codpedido).subscribe(res =>{
        this.listaEspecificaciones=res;
        console.log(res,"Especificaciones");
      });
      
    });
    
  }
  comprar(){
    
    this.pedidosService.update(this.Pedido,this.listaEspecificaciones);
  }

  UpdateTotal(){
    this.Pedido.total=0;
    for (let i = 0; i < this.listaEspecificaciones.length; i++) {
      this.listaEspecificaciones[i].precio =(this.listaEspecificaciones[i].cantidad*this.listaEspecificaciones[i].id.art.precio_art);
      this.Pedido.total = this.Pedido.total + parseFloat(this.listaEspecificaciones[i].precio)
    }
  }
}
