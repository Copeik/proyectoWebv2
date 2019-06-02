import { CarritoService } from './../../services/carrito.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Articulos } from './../../model/Articulo';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticulosService } from './../../services/articulos.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {
  listatipo:Array<any>;
  articulo=new Articulos();
  constructor(private articulosService:ArticulosService,private carritoService:CarritoService,private router:ActivatedRoute,private route:Router,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.obtenerItem();
    this.obtenerTipo();
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

base64textString:string

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
          this.articulo.imagen="data:image/jpeg;base64,"+this.base64textString;
  }

  obtenerItem(){
    this.articulosService.getArticulo(this.router.snapshot.params.id).subscribe(res =>{
      this.articulo=res
      console.log(res);
    });
  }

  obtenerTipo(){
    this.carritoService.getTipos().subscribe(res =>{
      this.listatipo = res
    })
  }

  guardarArticulo(){
    this.articulo.tipo = this.articulo.codigo_tipo
    this.articulosService.postArticulo(this.articulo).subscribe(res =>{
      console.log(res)
      if (res) {
        this.route.navigate(['/articulos'])
      }
    })
  }

}
