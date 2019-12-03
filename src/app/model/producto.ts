export class Producto{       

    codigo:number;
    nombre:string;
    precio:number;
    descripcion:string;
    fechaAlta:string;
    descatalogado:boolean;
    categoria:string;

    constructor(codigo?:number, nombre?:string, precio?:number, descripcion?:string, fechaAlta?:string, descatalogado?:boolean,categoria?: string){

        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.fechaAlta = fechaAlta;
        this.descatalogado = descatalogado;
        this.categoria = categoria;
    }
}