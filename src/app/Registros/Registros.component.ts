import { Registros_interface } from './../Registro_interface/interface_registro';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Agregar_registrosComponent } from '../Agregar_registros/Agregar_registros.component';
import { Editar_registroComponent } from '../Editar_registro/Editar_registro.component';



@Component({
  selector: 'app-Registros',
  templateUrl: './Registros.component.html',
  styleUrls: ['./Registros.component.css']
})
export class RegistrosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula_dueno','nombre_dueno','nombre_mascota','raza','edad','direccion', 'telefono_dueno', 'modificar', 'eliminar']
  
  data= [{
        cedula_dueno: '0937827453',
        nombre_dueno: 'kevin Lañon',      
        nombre_mascota: 'Max',
        raza: 'Labrador Retriver',
        edad: 2,
        direccion: 'Centenario-Guayaquil',
        telefono_dueno: '2-674309',
        
      },
      {
        cedula_dueno: '0847382901',
        nombre_dueno: 'Perez Cedeño',       
        nombre_mascota: 'Tier',
        raza: 'Pitbull',
        edad: 4,
        direccion: 'Las lomas',
        telefono_dueno: '2-238745',
        
      },
      {
        cedula_dueno: '0946787323',
        nombre_dueno: 'Sebastian Sanchez',      
        nombre_mascota: 'Ringo',
        raza: 'Huski Siberiano',
        edad: 6,
        direccion: 'Quito, Ecuador',
        telefono_dueno: '0978343675',
        
      },
      {
        cedula_dueno: '0936720192',
        nombre_dueno: 'Gabriela Alvarado',      
        nombre_mascota: 'Fido',
        raza: 'Gato persa',
        edad: 2,
        direccion: 'Urdenor',
        telefono_dueno: '2-230184',
        
      },
      
    ];
  
  nuevoPaciente:any;
  nav: any;
  buscarTexto: string = '';

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
    this.dataSource = new MatTableDataSource<Registros_interface>(this.data as Registros_interface[]);
    console.log(this.data);
  }

  buscarRegistros(): void {
    if (this.buscarTexto.trim() !== '') {
      const texto = this.buscarTexto.toLowerCase();
      const resultados = this.data.filter(registro => {
        return (
          registro.cedula_dueno.toLowerCase().includes(texto) ||
          registro.nombre_dueno.toLowerCase().includes(texto) ||
          registro.nombre_mascota.toLowerCase().includes(texto) ||
          registro.raza.toLowerCase().includes(texto) ||
          registro.edad.toString().includes(texto) ||
          registro.direccion.toLowerCase().includes(texto) ||
          registro.telefono_dueno.toLowerCase().includes(texto)
        );
      });
      this.dataSource.data = resultados;
    } else {
      this.dataSource.data = this.data;
    }
  }


  openDialogAgregar(){
    this.dialog.open(Agregar_registrosComponent, {
      width: '50%',
    })
  }

  //Modifica registro de una tabla
  openDialogModificar(element: any): void {
    const dialogRef = this.dialog.open(Editar_registroComponent, {
      width: '50%',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.data.findIndex(item => item.cedula_dueno === element.cedula_dueno);
        if (index !== -1) {
          this.data[index].nombre_dueno = result.nuevoNombreDueno;
          this.data[index].nombre_mascota = result.nuevaNombreMascota;
          this.data[index].raza = result.nuevaRaza;
          this.data[index].edad = result.nuevaEdad;
          this.data[index].direccion = result.nuevaDireccion;
          this.data[index].telefono_dueno = result.nuevoTelefonoDueno;
          this.dataSource.data = this.data;
        }
      }
    });
  }
  
  

  //Elimina un registro de la tabla
  eliminarRegistro(index: number) {
    this.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<Registros_interface>(this.data as Registros_interface[]);
  }
  
}



