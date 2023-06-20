import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Editar_productos',
  templateUrl: './Editar_productos.component.html',
  styleUrls: ['./Editar_productos.component.css']
})
export class Editar_productosComponent implements OnInit {

  // Variables para modificar los datos
  nuevaMarca: string;
  nuevaPrecioUnitario: number;
  nuevaNombreProovedor: string;
  nuevaHechoPara: string;
  

  constructor(
    public dialogRef: MatDialogRef<Editar_productosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Asignar los valores iniciales de los campos de modificación
    this.nuevaMarca = data.marca;
    this.nuevaPrecioUnitario = data.precio_unitario;
    this.nuevaNombreProovedor = data.nombre_proveedor;
    this.nuevaHechoPara = data.hecho_para;
    
  }

  // Función para guardar los cambios y cerrar el diálogo
  guardarCambios(): void {
    // Aquí puedes realizar las acciones necesarias para guardar los cambios en el registro
    // Puedes acceder a los nuevos valores a través de las variables: this.nuevoNombreDueno, this.nuevaNombreMascota, etc.

    // Cerrar el diálogo y pasar los datos modificados al componente padre
    this.dialogRef.close({
      nuevaMarca: this.nuevaMarca,
      nuevaPrecioUnitario: this.nuevaPrecioUnitario,
      nuevaNombreProovedor: this.nuevaNombreProovedor,
      nuevaHechoPara : this.nuevaHechoPara 
    });
  }

  // Función para cancelar y cerrar el diálogo sin guardar cambios
  cancelar(): void {
    this.dialogRef.close();
  }

  ngOnInit(){}

}
