import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaCamareroComponent } from './components/camarerosComponents/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/camarerosComponents/listado-camarero/listado-camarero.component';
import { AltaProductoComponent } from './components/productoComponents/alta-producto/alta-producto.component';
import { ListadoProductoComponent } from './components/productoComponents/listado-producto/listado-producto.component';
import { AltaPedidoComponent } from './components/pedidosComponents/alta-pedido/alta-pedido.component';
import { ListadoPedidoComponent } from './components/pedidosComponents/listado-pedido/listado-pedido.component';
import { EditProductoComponent } from './components/productoComponents/edit-producto/edit-producto.component';


const routes: Routes = [
  {path:'', redirectTo: 'Alta_Camarero', pathMatch: 'full'},  // redirección a com1 si el usuario no pone nada
  {path: 'Alta_Camarero', component: AltaCamareroComponent},
  {path: 'Listado_Camareros', component: ListadoCamareroComponent},
  {path: 'Alta_Producto', component: AltaProductoComponent},
  {path: 'Listado_Productos', component: ListadoProductoComponent},
  {path: 'Editar_Producto/:codigo', component: EditProductoComponent},
  {path: 'Alta_Pedido', component: AltaPedidoComponent},
  {path: 'Listado_Pedidos', component: ListadoPedidoComponent},
  {path: '**', redirectTo: 'Alta_Camarero'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
