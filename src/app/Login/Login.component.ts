import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  alert: boolean = false;

  /**
   * Objeto
   */
  usuarioLogin= new FormGroup({

    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });



/**
 * Metdo para validar los datos ingresados por el usuario
 */
  ngOnInit() {

    if (this.usuarioLogin.value.usuario=="kevin" && this.usuarioLogin.value.password=="123") {

      this.router.navigate(['/Citas_medicas']);//Me envia a la ruta cliente
      this.dialogRef.close();//cierra ventana
      
    } else {

      this.alert= true;
      setTimeout(() => this.alert= false, 4000);
    }
  }

}
