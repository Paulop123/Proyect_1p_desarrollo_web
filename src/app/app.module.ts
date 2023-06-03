import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login/Login.component';
import { CabeceraComponent } from './Cabecera/Cabecera.component';
import { FooterComponent } from './Footer/Footer.component';
import { Citas_medicasComponent } from './Citas_medicas/Citas_medicas.component';

@NgModule({
  declarations: [				
    AppComponent,
      LoginComponent,
      CabeceraComponent,
      FooterComponent,
      Citas_medicasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
