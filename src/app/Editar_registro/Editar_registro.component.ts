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

  registro: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private router: Router, private dialogRef: MatDialogRef<Editar_registroComponent>) {

    this.registro = { ...data };
   }

  ngOnInit(): void {
  }



  guardarCambios(){


  }
  
  cancelar()
  {
    this.dialogRef.close(); 
  }



}
