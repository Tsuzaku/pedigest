import { Component, OnInit } from '@angular/core';

// Models
import { Pedido } from 'src/app/model/pedido';

// Service
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-listado-pedido',
  templateUrl: './listado-pedido.component.html',
  styleUrls: ['./listado-pedido.component.css']
})
export class ListadoPedidoComponent implements OnInit {

  pedidos:Pedido[] = [];

  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.pedidoService.getAll().subscribe(datos => {
      for(let d of datos) {
        console.log(d);
        this.pedidos.push(new Pedido(d.id, d.camarero, d.fecha, d.mesa, d.lineasPedido));
      }
    });
  }

  navigateToDetalles(id:number) {
    this.router.navigateByUrl('/Detalle_Pedido/' + id);
  }

}
