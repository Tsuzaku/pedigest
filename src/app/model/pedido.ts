import { Camarero } from './camarero';
import { LineaPedido } from './lineaPedido';

export class Pedido{ 

    id:number;  
    camarero:Camarero;
    fecha:Date;
    mesa:number;
    lineasPedido:LineaPedido[];

    constructor(id?:number, camarero?:Camarero, fecha?:Date, mesa?:number, lineasPedido?:LineaPedido[]) {
        this.id = id;
        this.camarero = camarero;
        this.fecha = fecha;
        this.mesa = mesa;
        this.lineasPedido = lineasPedido;
    }
    
    
}