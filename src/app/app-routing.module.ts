import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './Components/home/home.module#HomePageModule' },
  { path: 'tabsbar', loadChildren: './Components/tabsbar/tabsbar.module#TabsbarPageModule' },
  { path: 'inicio', loadChildren: './Components/inicio/inicio.module#InicioPageModule' },
  { path: 'articulos', loadChildren: './Components/articulos/articulos.module#ArticulosPageModule' },
  { path: 'usuarios', loadChildren: './Components/usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'articulo/:id', loadChildren: './Components/articulo/articulo.module#ArticuloPageModule' },
  { path: 'clientes', loadChildren: './Components/clientes/clientes.module#ClientesPageModule' },
  { path: 'cliente/:id', loadChildren: './Components/cliente/cliente.module#ClientePageModule' },
  { path: 'pedidos', loadChildren: './Components/pedidos/pedidos.module#PedidosPageModule' },
  { path: 'pedido/:id', loadChildren: './Components/pedido/pedido.module#PedidoPageModule' }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
