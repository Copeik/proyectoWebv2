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
  constructor(private route:Router) { }

  ngOnInit() {
    this.Usuario=JSON.parse(sessionStorage.getItem("Usuario"));
    console.log(this.Usuario);
  }

  logOut(){
    sessionStorage.clear();
    this.route.navigate(["home"])
    setTimeout(() => {
      location.reload()
    }, 0);
    
  }
}
