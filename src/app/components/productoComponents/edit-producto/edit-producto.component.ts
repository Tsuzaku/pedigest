import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/model/producto';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';



@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  categorias:String[] = undefined;

  editedProducto:Producto = new Producto();

  constructor(private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.categoriaService.getCategorias().subscribe(datos => {
      this.categorias = datos;
    });

    this.route.params.subscribe(x => {
      this.productoService.getByID(Number(x.codigo)).subscribe(d => {
        console.log(this.formatDate(d.fechaAlta));
        this.editedProducto = new Producto(Number(d.codigo), d.nombre, d.precio, d.descripcion, this.formatDate(d.fechaAlta), Boolean(d.descatalogado), d.categoria)
      });
      
    }); 
  }

  editProducto() {
    this.productoService.altaProducto(this.editedProducto).subscribe(datos => {
      console.log(datos);
    });
    this.router.navigateByUrl('/Listado_Productos');


  }

  formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

}
