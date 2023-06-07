import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Agregar_registrosComponent } from '../Agregar_registros/Agregar_registros.component';
import { Registros_interface } from '../Registro_interface/interface_registro';



@Component({
  selector: 'app-Registros',
  templateUrl: './Registros.component.html',
  styleUrls: ['./Registros.component.css']
})
export class RegistrosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula_dueno','nombre_dueno','nombre_mascota','raza','edad','direccion', 'telefono_dueno']
  
  data = [{
        cedula_dueno: '0937827453',
        nombre_dueno: 'kevin Lañon',      
        nombre_mascota: 'Max',
        raza: 'Labrador Retriver',
        edad: 2,
        direccion: 'Centenario-Guayaquil',
        telefono_dueno: '2-674309'
      },
      {
        cedula_dueno: '0847382901',
        nombre_dueno: 'Perez Cedeño',       
        nombre_mascota: 'Tier',
        raza: 'Pitbull',
        edad: 4,
        direccion: 'Las lomas',
        telefono_dueno: '2-238745'
      },
      {
        cedula_dueno: '0946787323',
        nombre_dueno: 'Sebastian Sanchez',      
        nombre_mascota: 'Ringo',
        raza: 'Huski Siberiano',
        edad: 6,
        direccion: 'Quito, Ecuador',
        telefono_dueno: '0978343675'
      },
      {
        cedula_dueno: '0936720192',
        nombre_dueno: 'Gabriela Alvarado',      
        nombre_mascota: 'Fido',
        raza: 'Gato persa',
        edad: 2,
        direccion: 'Urdenor',
        telefono_dueno: '2-230184'
      },
      
    ];
  
  nuevoPaciente:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoPaciente = this.nav.extras.state;
  
    if (this.nuevoPaciente != null)
    {      
      console.log(this.nuevoPaciente.datosCliente.queryParams);
      this.data.push(this.nuevoPaciente.datosCliente.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Registros_interface>(this.data as Registros_interface[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(Agregar_registrosComponent, {
      width: '50%',
    })
  }

}



