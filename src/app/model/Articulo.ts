export class Articulos {
    codarticulo: number;
    cantidad: number;
    nombre: string;
    descripcion: string;
    precio_articulo: any;
    imagen:string;
    codigo_tipo: {
        codigo_t: number;
        nombre: string;
    }
    tipo:any
    fecha_caducidad: string;
    constructor(){
        this.codigo_tipo= {codigo_t: 0,
            nombre: ""}
    }
}