import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL = 'http://10.250.5.31:8086/api/pedidos'

  constructor(private http:HttpClient) { }

  getByID(id:number):Observable<Pedido> {

    return this.http.get<Pedido>(this.URL + "/" + id);
  }

  getAll():Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.URL);
  }

  altaPedido(pedido:Pedido):Observable<Pedido> {
    return this.http.post<Pedido>(this.URL, pedido);
  }

  /*updateProducto(producto:Pedido):Observable<Pedido> {
    
    return this.http.post<Pedido>(this.URL, producto);
  }*/
}
