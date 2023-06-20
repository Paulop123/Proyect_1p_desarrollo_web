import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Citas_medicasComponent } from './Citas_medicas/Citas_medicas.component';
import { LoginComponent } from './Login/Login.component';
import { Pagina_inicioComponent } from './Pagina_inicio/Pagina_inicio.component';
import { Quienes_somosComponent } from './Quienes_somos/Quienes_somos.component';
import { ProductosComponent } from './Productos/Productos.component';
import { RegistrosComponent } from './Registros/Registros.component';
import { ContactosComponent } from './Contactos/Contactos.component';
import { CitasComponent } from './Citas/Citas.component';


const routes: Routes = [

  {path:'', component: Pagina_inicioComponent},
  {path:'Pagina_inicio', component: Pagina_inicioComponent},
  {path:'Quienes_somos', component: Quienes_somosComponent},
  {path:'Citas', component: CitasComponent},
  {path:'Citas_medicas', component: Citas_medicasComponent},
  {path:'Productos', component: ProductosComponent},
  {path:'Registros', component: RegistrosComponent},
  {path:'Contactos', component: ContactosComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
