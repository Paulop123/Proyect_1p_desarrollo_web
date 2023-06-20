import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select'; // Importante: Agrega esta línea
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-Agregar_cita_medica',
  templateUrl: './Agregar_cita_medica.component.html',
  styleUrls: ['./Agregar_cita_medica.component.css']
})
export class Agregar_cita_medicaComponent implements OnInit {

  nuevaCita: FormGroup;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<Agregar_cita_medicaComponent>
  ) {
    this.nuevaCita = new FormGroup({
      nombre_paciente: new FormControl('', Validators.required),
      tipo_servicio: new FormControl('', Validators.required),
      fecha_cita: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      veterinario: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let objToSend: NavigationExtras = {
      queryParams: {
        nombre_paciente: this.nuevaCita.value.nombre_paciente,
        tipo_servicio: this.nuevaCita.value.tipo_servicio,
        fecha_cita: this.nuevaCita.value.fecha_cita,
        hora: this.nuevaCita.value.hora,
        veterinario: this.nuevaCita.value.veterinario,
      },
      skipLocationChange: false,
      fragment: 'top',
    };

    this.dialogRef.close();
    this.redirectTo('/Citas_medicas', objToSend);
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
