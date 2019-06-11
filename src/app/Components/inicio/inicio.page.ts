import { PedidosService } from './../../services/pedidos.service';
import { Pedidos } from 'src/app/model/Pedidos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  Usuario:Cliente
  pedidos:Array<Pedidos>
  cont:number=0

  constructor(private route:Router,private pedidosService:PedidosService) { }

  ngOnInit() {
    this.Usuario=JSON.parse(sessionStorage.getItem("Usuario"));
    console.log(this.Usuario);
    this.pedidosServicio();
  }

  logOut(){
    sessionStorage.clear();
    this.route.navigate(["home"])
    setTimeout(() => {
      location.reload()
    }, 0);
    
  }

  pedidosServicio(){
    this.cont=0
    this.pedidosService.getallByAdmin().subscribe(res=>{
      this.pedidos=res
      if (this.pedidos != null && this.pedidos != undefined ) {
        for (let i = 0; i < this.pedidos.length; i++) {
          console.log(this.pedidos[i].estado)
          if (this.pedidos[i].estado.id == 7) {
            this.cont++;
          }
          
        }
      }
    })
  }
  
}
