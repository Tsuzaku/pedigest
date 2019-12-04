import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';

@Component({
  selector: 'app-alta-camarero',
  templateUrl: './alta-camarero.component.html',
  styleUrls: ['./alta-camarero.component.css']
})
export class AltaCamareroComponent implements OnInit {

  camarero:Camarero = new Camarero();

  constructor(private camareroService: CamareroService) { }

  ngOnInit() {
  }

  addCamarero():void{

    this.camarero.codigo = Math.floor(Math.random() * 1000) + 150;
    this.camareroService.altaCamarero(this.camarero).subscribe();

    this.camarero = new Camarero();

  }
}
