import { AuthenticationService } from './../../services/authentication.service';
import { Cliente } from './../../model/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes:Array<Cliente> = [];

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.obtenerClientes()
  }

  obtenerClientes(){
    this.auth.getUsuariosAdmin().subscribe( res => {
      console.log(res)
      this.clientes = res
    })
  }

}
