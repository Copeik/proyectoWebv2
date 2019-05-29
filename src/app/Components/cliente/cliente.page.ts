import { Cliente } from './../../model/Cliente';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  listaRol:Array<any>;
  cliente=new Cliente();
  constructor(private auth:AuthenticationService,private router:ActivatedRoute,private route:Router,private _sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.obtenerUsuario();
    // this.obtenerTipo();
  }

  obtenerUsuario(){
    this.auth.getUsuario(this.router.snapshot.params.id).subscribe(res =>{
      this.cliente=res
      console.log(res);
    });
  }

  // obtenerTipo(){
  //   this.carritoService.getTipos().subscribe(res =>{
  //     this.listatipo = res
  //   })
  // }
}
