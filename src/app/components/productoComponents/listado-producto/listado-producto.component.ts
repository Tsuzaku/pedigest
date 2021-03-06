import { Component, OnInit } from '@angular/core';

// Models
import { Producto } from 'src/app/model/producto';

// Services
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  productos:Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    //this.productos = [];
    this.onLoad();
  }

  onLoad() {
    this.productoService.getAll().subscribe(datos => {
      for(let d of datos) {
        this.productos.push(new Producto(d.codigo, d.nombre, d.precio, d.descripcion, d.fechaAlta, Boolean(d.descatalogado), d.categoria));
      }
    });
  }

  /*Event() {
    this.onLoad(); //TODO
  }*/

  navigateToEdit(codigo:number) {
    this.router.navigateByUrl('/Editar_Producto/' + codigo);
  }

}
