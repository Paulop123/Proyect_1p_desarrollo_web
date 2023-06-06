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


  /**
   * Metodo de login
   */
  inicioSesion(){

    this.dialog.open(LoginComponent)
  }
  
  cerrarSesion(){
    this.sharedService.setTemp(2);
    this.router.navigate(['/Pagina_inicio']);

  }

  ngOnInit() {
  }

}
