import { Component, OnInit } from '@angular/core';

// Models
import { Producto } from 'src/app/model/producto';

// Services
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  productos:Producto[] = undefined;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productos = [];
    this.productoService.getAll().subscribe(datos => {
      for(let d of datos) {
        console.log(d)
        this.productos.push(new Producto(d.codigo, d.nombre, d.precio, d.descripcion, d.fechaAlta, Boolean(d.descatalogado), d.categoria));
      }
    });
  }

}
