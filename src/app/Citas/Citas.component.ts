import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Agregar_cita_medicaComponent } from '../Agregar_cita_medica/Agregar_cita_medica.component';
@Component({
  selector: 'app-Citas',
  templateUrl: './Citas.component.html',
  styleUrls: ['./Citas.component.css']
})
export class CitasComponent implements OnInit {


  constructor(private router: Router, private dialog:MatDialog) { }

  ngOnInit() {
  }


  //Metodo agendar citas
  agendar_cita(){

    this.dialog.open(Agregar_cita_medicaComponent, {
      width: '80%',
    })
  }

  //Metodo para revisar la lista de citas agendadas
  lista_de_citas(){

    this.router.navigate(['/Citas_medicas'])
  }

}
