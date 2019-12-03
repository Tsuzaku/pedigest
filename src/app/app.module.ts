import { NgModule } from '@angular/core';

// Modules 
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms'; 
import { HttpClientModule }     from '@angular/common/http'
import { AppRoutingModule }     from './app-routing.module';

// Components
import { AppComponent }             from './app.component';
import { AltaCamareroComponent }    from './components/camarerosComponents/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/camarerosComponents/listado-camarero/listado-camarero.component';
import { AltaPedidoComponent }      from './components/pedidosComponents/alta-pedido/alta-pedido.component';
import { ListadoPedidoComponent }   from './components/pedidosComponents/listado-pedido/listado-pedido.component';
import { AltaProductoComponent }    from './components/productoComponents/alta-producto/alta-producto.component';
import { ListadoProductoComponent } from './components/productoComponents/listado-producto/listado-producto.component';
import { EditProductoComponent }    from './components/productoComponents/edit-producto/edit-producto.component';
import { DetallePedidoComponent }   from './components/pedidosComponents/detalle-pedido/detalle-pedido.component';
import { AboutUsComponent }         from './components/about-us/about-us.component';

// Services
import { CategoriaService } from './services/categoria.service';
import { CamareroService }  from './services/camarero.service';
import { ProductoService }  from  './services/producto.service';
import { PedidoService } from './services/pedido.service';


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
    DetallePedidoComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CategoriaService,
    CamareroService,
    ProductoService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
