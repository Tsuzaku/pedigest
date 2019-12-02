import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaCamareroComponent } from './components/camarerosComponents/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/camarerosComponents/listado-camarero/listado-camarero.component';
import { AltaProductoComponent } from './components/productoComponents/alta-producto/alta-producto.component';
import { ListadoProductoComponent } from './components/productoComponents/listado-producto/listado-producto.component';
import { AltaPedidoComponent } from './components/pedidosComponents/alta-pedido/alta-pedido.component';
import { ListadoPedidoComponent } from './components/pedidosComponents/listado-pedido/listado-pedido.component';


const routes: Routes = [
  {path:'', redirectTo: 'Alta Camarero', pathMatch: 'full'},  // redirección a com1 si el usuario no pone nada
  {path: 'Alta Camarero', component: AltaCamareroComponent},
  {path: 'Listado Camareros', component: ListadoCamareroComponent},
  {path: 'Alta Producto', component: AltaProductoComponent},
  {path: 'Listado Productos', component: ListadoProductoComponent},
  {path: 'Alta Pedido', component: AltaPedidoComponent},
  {path: 'Listado Pedidos', component: ListadoPedidoComponent},
  {path: '**', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
