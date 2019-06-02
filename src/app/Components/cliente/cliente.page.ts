import { Cliente } from './../../model/Cliente';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  rol:string
  listaRol:Array<any>;
  cliente=new Cliente();
  constructor(private toastController:ToastController ,private auth:AuthenticationService,private router:ActivatedRoute,private route:Router,private _sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.obtenerUsuario();
    
    // this.obtenerTipo();
  }
Activarcliente(){
  if (this.cliente.activo==true) {
    this.cliente.activo=false;
  }else{
    this.cliente.activo=true;
  }

}
cambiarRol(){
  if (this.cliente.rol.id_rol==3) {
    this.rol="Cliente"
    this.cliente.rol.id_rol=2;
  }else{
    this.cliente.rol.id_rol=3;
    this.rol="Administrador"
  }

}

  obtenerUsuario(){
    this.auth.getUsuario(this.router.snapshot.params.id).subscribe(res =>{
      this.cliente=res
      console.log(res);
      if (this.cliente.rol.id_rol==3) {
        this.rol="Administrador"
      }else{
        this.rol="Cliente"
      this.cliente.rol.id_rol=2;
      }
    });
  }
  guardarCliente(){
    this.auth.guardarUsuario(this.cliente)
    this.presentToastWithOptions();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Cambios guardados con exito',
      position: 'top',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
  // obtenerTipo(){
  //   this.carritoService.getTipos().subscribe(res =>{
  //     this.listatipo = res
  //   })
  // }
}
