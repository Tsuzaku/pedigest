import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaCamareroComponent } from './components/camarerosComponents/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/camarerosComponents/listado-camarero/listado-camarero.component';
import { AltaPedidoComponent } from './components/pedidosComponents/alta-pedido/alta-pedido.component';
import { ListadoPedidoComponent } from './components/pedidosComponents/listado-pedido/listado-pedido.component';
import { AltaProductoComponent } from './components/productoComponents/alta-producto/alta-producto.component';
import { ListadoProductoComponent } from './components/productoComponents/listado-producto/listado-producto.component';
import { EditProductoComponent } from './components/productoComponents/edit-producto/edit-producto.component';
import { DetallePedidoComponent } from './components/pedidosComponents/detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaCamareroComponent,
    ListadoCamareroComponent,
    AltaPedidoComponent,
    ListadoPedidoComponent,
    AltaProductoComponent,
    ListadoProductoComponent,
    EditProductoComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
