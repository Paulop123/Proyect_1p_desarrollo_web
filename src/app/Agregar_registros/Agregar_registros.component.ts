import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-Agregar_registros',
  templateUrl: './Agregar_registros.component.html',
  styleUrls: ['./Agregar_registros.component.css']
})
export class Agregar_registrosComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<Agregar_registrosComponent>) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  pacienteNuevo = new FormGroup({
    cedula_dueno: new FormControl('',Validators.required),
    nombre_dueno: new FormControl('',Validators.required),
    nombre_mascota: new FormControl('', Validators.required),
    raza: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono_dueno: new FormControl('', Validators.required)
  })

  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula_dueno: this.pacienteNuevo.value.cedula_dueno,
        nombre_dueno: this.pacienteNuevo.value.nombre_dueno,
        nombre_mascota: this.pacienteNuevo.value.nombre_mascota,
        raza: this.pacienteNuevo.value.raza,
        edad: this.pacienteNuevo.value.edad,
        direccion: this.pacienteNuevo.value.direccion,
        telefono_dueno: this.pacienteNuevo.value.telefono_dueno
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/Registros', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
