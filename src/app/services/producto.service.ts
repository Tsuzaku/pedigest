import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL = environment.apiURL + '/productos'

  constructor(private http:HttpClient) { }

  getByID(codigo:number):Observable<Producto> {

    return this.http.get<Producto>(this.URL + "/" + codigo);
  }

  getAll():Observable<Producto[]> {
    return this.http.get<Producto[]>(this.URL);
  }

  altaProducto(producto:Producto):Observable<Producto> {
    return this.http.post<Producto>(this.URL, producto);
  }

  /*updateProducto(producto:Producto):Observable<Producto> {
    
    return this.http.post<Producto>(this.URL, producto);
  }*/


}