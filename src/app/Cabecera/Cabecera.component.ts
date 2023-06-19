import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../Login/Login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service'; // Importa el servicio con la ruta correcta

@Component({
  selector: 'app-Cabecera',
  templateUrl: './Cabecera.component.html',
  styleUrls: ['./Cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
 temp:any;
  constructor(private dialog: MatDialog,  private router: Router, public sharedService: SharedService ){ }


 
// Método inicioSesion()
inicioSesion() {
  this.dialog.open(LoginComponent);
  localStorage.setItem('isLoggedIn', 'true');
  
}

// Método cerrarSesion()
cerrarSesion() {
  
  localStorage.removeItem('isLoggedIn');
  this.temp = 2;
  this.router.navigate(['/Pagina_inicio']);
  
}

ngOnInit() {
  this.temp = localStorage.getItem('isLoggedIn') ? 1 : 2;
  
}
 

 /**
   * Metodo de login
   */
  /** 
  ngOnInit() {
    this.temp = this.sharedService.getTemp();
  }


  inicioSesion(){

    this.dialog.open(LoginComponent)
  }
  
  cerrarSesion(){
    this.sharedService.setTemp(2);
    this.router.navigate(['/Pagina_inicio']);

  }
*/
}
