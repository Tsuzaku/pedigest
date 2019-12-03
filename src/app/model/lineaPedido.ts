import { Producto } from './producto';

export class LineaPedido {
    cantidad:number;
    precio:number;
    producto:Producto;

    constructor(cantidad?:number, precio?:number, producto?:Producto) {
        this.cantidad = cantidad;
        this.precio = precio;
        this.producto = producto;
    }
}