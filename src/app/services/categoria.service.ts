import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = environment.apiURL + '/categorias'

  constructor(private http:HttpClient) { }

  // Implementación GET

  getCategorias():Observable<any>{
    return this.http.get(this.URL);
  }
}