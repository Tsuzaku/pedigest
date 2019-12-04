import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camarero } from '../model/camarero';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  URL = environment.apiURL + '/camareros'

  constructor(private http:HttpClient) { }

  getAll():Observable<Camarero[]> {
    return this.http.get<Camarero[]>(this.URL);
  }

  altaCamarero(camarero:Camarero):Observable<Camarero> {
    return this.http.post<Camarero>(this.URL, camarero);
  }

}

