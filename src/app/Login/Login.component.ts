import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, public sharedService: SharedService) { }

  alert: boolean = false;

  /**
   * Objeto
   */
  usuarioLogin= new FormGroup({

    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 

 
  ngOnInit() {}

/**
 * Metodo para validar los datos ingresados por el usuario
 */
  ingresoLogin() {
    if (this.usuarioLogin.value.usuario== "sellan" && this.usuarioLogin.value.password=="123") {
      /**this.sharedService.sesion = 7;
       */
      this.sharedService.setRoles(1); // Establecer roles a 1 para el usuario sellan
      this.router.navigate(['']);//Me envia a la ruta cliente
      this.dialogRef.close();//cierra ventana
      
    }

if (this.usuarioLogin.value.usuario== "kevin" && this.usuarioLogin.value.password=="123") {
       /**this.sharedService.sesion = 7;
      this.sharedService.temp = 2; */
      this.sharedService.setRoles(2);
      this.router.navigate(['/Citas_medicas']);//Me envia a la ruta cliente
      this.dialogRef.close();//cierra ventana
      
    } 

     else {

      this.alert= true;
      setTimeout(() => this.alert= false, 4000);
    }
  }

}
