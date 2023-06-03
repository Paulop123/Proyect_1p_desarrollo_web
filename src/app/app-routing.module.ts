import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Citas_medicasComponent } from './Citas_medicas/Citas_medicas.component';
import { LoginComponent } from './Login/Login.component';
import { Pagina_inicioComponent } from './Pagina_inicio/Pagina_inicio.component';


const routes: Routes = [

  {path:'', component: Pagina_inicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
