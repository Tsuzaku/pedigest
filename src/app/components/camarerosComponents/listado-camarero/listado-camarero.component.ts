import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';

@Component({
  selector: 'app-listado-camarero',
  templateUrl: './listado-camarero.component.html',
  styleUrls: ['./listado-camarero.component.css']
})
export class ListadoCamareroComponent implements OnInit {

  camareros: Camarero[] = undefined;
  cols: any[]= undefined;

  constructor(private camareroService: CamareroService) { }

  ngOnInit() {

    this.cols = [
      { field:'codigo', header:'Código' }, 
      { field:'nombre', header:'Nombre' }
    ]

    this.camareros = [];

    this.camareroService.getAll().subscribe(data =>{
      
      for(let d of data){
        this.camareros.push(d);
      }
      
    });
  }

}
