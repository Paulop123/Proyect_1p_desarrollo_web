import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login/Login.component';
import { CabeceraComponent } from './Cabecera/Cabecera.component';
import { FooterComponent } from './Footer/Footer.component';
import { Citas_medicasComponent } from './Citas_medicas/Citas_medicas.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { Pagina_inicioComponent } from './Pagina_inicio/Pagina_inicio.component';
import { Quienes_somosComponent } from './Quienes_somos/Quienes_somos.component';
import { ProductosComponent } from './Productos/Productos.component';
import { RegistrosComponent } from './Registros/Registros.component';
import { ContactosComponent } from './Contactos/Contactos.component';
import { SharedService } from './services/shared.service';
import { Agregar_registrosComponent } from './Agregar_registros/Agregar_registros.component';
import { Editar_registroComponent } from './Editar_registro/Editar_registro.component';
import { FormsModule } from '@angular/forms';
import { CitasComponent } from './Citas/Citas.component';
import { Agregar_cita_medicaComponent } from './Agregar_cita_medica/Agregar_cita_medica.component';
import { MatNativeDateModule } from '@angular/material/core'; 
import { Editar_productosComponent } from './Editar_productos/Editar_productos.component';
import { Agregar_productosComponent } from './Agregar_productos/Agregar_productos.component';




@NgModule({
  declarations: [																		
    AppComponent,
      LoginComponent,
      CabeceraComponent,
      FooterComponent,
      Citas_medicasComponent,
      Pagina_inicioComponent,
      Quienes_somosComponent,
      ProductosComponent,
      RegistrosComponent,
      ContactosComponent,
      Agregar_registrosComponent,
      Editar_registroComponent,
      CitasComponent,
      Agregar_cita_medicaComponent,
      ProductosComponent,
      Editar_productosComponent,
      Agregar_productosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
