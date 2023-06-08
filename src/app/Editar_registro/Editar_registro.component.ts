import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-Editar_registro',
  templateUrl: './Editar_registro.component.html',
  styleUrls: ['./Editar_registro.component.css']
})
export class Editar_registroComponent implements OnInit {


  // Variables para modificar los datos
  nuevaCedulaDueno: string
  nuevoNombreDueno: string;
  nuevaNombreMascota: string;
  nuevaRaza: string;
  nuevaEdad: number;
  nuevaDireccion: string;
  nuevoTelefonoDueno: string;

  constructor(
    public dialogRef: MatDialogRef<Editar_registroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Asignar los valores iniciales de los campos de modificación
    this.nuevaCedulaDueno = data.cedula_dueno;
    this.nuevoNombreDueno = data.nombre_dueno;
    this.nuevaNombreMascota = data.nombre_mascota;
    this.nuevaRaza = data.raza;
    this.nuevaEdad = data.edad;
    this.nuevaDireccion = data.direccion;
    this.nuevoTelefonoDueno = data.telefono_dueno;
  }

  // Función para guardar los cambios y cerrar el diálogo
  guardarCambios(): void {
    // Aquí puedes realizar las acciones necesarias para guardar los cambios en el registro
    // Puedes acceder a los nuevos valores a través de las variables: this.nuevoNombreDueno, this.nuevaNombreMascota, etc.

    // Cerrar el diálogo y pasar los datos modificados al componente padre
    this.dialogRef.close({
      nuevaCedulaDueno: this.nuevaCedulaDueno,
      nuevoNombreDueno: this.nuevoNombreDueno,
      nuevaNombreMascota: this.nuevaNombreMascota,
      nuevaRaza: this.nuevaRaza,
      nuevaEdad: this.nuevaEdad,
      nuevaDireccion: this.nuevaDireccion,
      nuevoTelefonoDueno: this.nuevoTelefonoDueno
    });
  }

  // Función para cancelar y cerrar el diálogo sin guardar cambios
  cancelar(): void {
    this.dialogRef.close();
  }

  ngOnInit(){}


}
