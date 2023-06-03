import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../Login/Login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-Cabecera',
  templateUrl: './Cabecera.component.html',
  styleUrls: ['./Cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private dialog: MatDialog) { }


  /**
   * Metodo de login
   */
  inicioSesion(){

    this.dialog.open(LoginComponent)
  }

  ngOnInit() {
  }

}
