export class Cliente {
    id: number
    usuario: string
    nombre: string
    apellidos: string
    contrasena: string
    rol: {
        id_rol: number

    }
    activo: boolean
    correo: string
    telefono: number
    dir = {
        id_direc: null,
        direc: ""
    }
    constructor() {

    }
}