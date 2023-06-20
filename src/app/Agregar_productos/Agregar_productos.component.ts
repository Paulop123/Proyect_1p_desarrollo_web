import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select'; // Importante: Agrega esta línea
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-Agregar_productos',
  templateUrl: './Agregar_productos.component.html',
  styleUrls: ['./Agregar_productos.component.css']
})
export class Agregar_productosComponent implements OnInit {

  nuevoProducto: FormGroup;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<Agregar_productosComponent>
  ) {
    this.nuevoProducto = new FormGroup({
      nombre_producto: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      precio_unitario: new FormControl('', Validators.required),
      nombre_proveedor: new FormControl('', Validators.required),
      hecho_para: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let objToSend: NavigationExtras = {
      queryParams: {
        nombre_producto: this.nuevoProducto.value.nombre_producto,
        marca: this.nuevoProducto.value.marca,
        precio_unitario: this.nuevoProducto.value.precio_unitario,
        nombre_proveedor: this.nuevoProducto.value.nombre_proveedor,
        hecho_para: this.nuevoProducto.value.hecho_para,
      },
      skipLocationChange: false,
      fragment: 'top',
    };

    this.dialogRef.close();
    this.redirectTo('/Productos', objToSend);
  }

  redirectTo(uri: string, objToSend: NavigationExtras) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri], { state: { datosCliente: objToSend } })
    );
  }

  cancelar() {
    this.dialogRef.close();
  }

}
