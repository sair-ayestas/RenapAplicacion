import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

// componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { InicioProductoComponent } from './components/inicio-producto/inicio-producto.component';
const routes: Routes = [

  { path: '', component: InicioProductoComponent },
  { path: 'ver-producto', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
