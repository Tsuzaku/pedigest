import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  pedido:Pedido = undefined;

  constructor(private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.pedidoService.getByID(Number(x.id)).subscribe(d => {
        this.pedido = new Pedido(d.id, d.camarero, d.fecha, d.mesa, d.lineasPedido);
      });
      
    });
  }

  volver() {
    this.router.navigateByUrl('/Listado_Pedidos');
  }

}
