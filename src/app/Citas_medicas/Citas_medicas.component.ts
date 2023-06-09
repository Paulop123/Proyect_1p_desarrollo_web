import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Agregar_cita_medicaComponent } from '../Agregar_cita_medica/Agregar_cita_medica.component';
import { Interface_cita } from '../Registro_interface_cita/interface_cita';



@Component({
  selector: 'app-Citas_medicas',
  templateUrl: './Citas_medicas.component.html',
  styleUrls: ['./Citas_medicas.component.css']
})
export class Citas_medicasComponent implements OnInit {

  
  dataSource: any = [];
  displayedColumns: string[] = ['nombre_paciente','tipo_servicio','fecha_cita','hora','veterinario', 'eliminar']
  buscarTexto: string = '';


  data= [{
        nombre_paciente: 'Max',
        tipo_servicio: 'Chequeo general',      
        fecha_cita: new Date('2023-06-22'),
        hora: 8,
        veterinario: 'Pedro Ximenes',
      },
      {
        nombre_paciente: 'Tier',
        tipo_servicio: 'Cirugia',      
        fecha_cita: new Date('2023-05-10'),
        hora: 20,
        veterinario: 'Pedro Ximenes',
      },
      {
        nombre_paciente: 'Moos',
        tipo_servicio: 'Chequeo general',      
        fecha_cita: new Date('2023-06-22'),
        hora: 8,
        veterinario: 'Cristian Erazo',
      },
      {
        nombre_paciente: 'Ringo',
        tipo_servicio: 'Chequeo general',      
        fecha_cita: new Date('2023-06-22'),
        hora: 16,
        veterinario: 'Jose Villegas',
      },
      {
        nombre_paciente: 'Fido',
        tipo_servicio: 'Chequeo general',      
        fecha_cita: new Date('2023-06-22'),
        hora: 19,
        veterinario: 'Pedro Ximenes',
      },
      {
        nombre_paciente: 'Lua',
        tipo_servicio: 'Chequeo general',      
        fecha_cita: new Date('2023-06-23'),
        hora: 10,
        veterinario: 'Jose Villegas',
      },

      
    ];
  
  nuevoPaciente:any;
  nav: any;

  //Constructor que inicializa
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
    this.dataSource = new MatTableDataSource<Interface_cita>(this.data as Interface_cita[]);
    console.log(this.data);
  }
  
  //Metodo para regresar a cita
  regresar_cita_agendar(){
    
    this.router.navigate(['/Citas'])
  }

  //Elimina un registro de la tabla
  eliminarRegistro(index: number) {
    this.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<Interface_cita>(this.data as Interface_cita[]);
  }


  buscarRegistros() {
    const texto = this.buscarTexto.toLowerCase();
    const resultados = this.data.filter(
      item =>
        item.nombre_paciente.toLowerCase().includes(texto) ||
        item.tipo_servicio.toLowerCase().includes(texto) ||
        item.veterinario.toLowerCase().includes(texto)
    );
    this.dataSource.data = resultados;
  }
}
