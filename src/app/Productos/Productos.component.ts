import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Interface_productos } from '../Interface_registro_productos/Interface_productos';
import { Agregar_productosComponent } from '../Agregar_productos/Agregar_productos.component';
import { Editar_productosComponent } from '../Editar_productos/Editar_productos.component';


@Component({
  selector: 'app-Productos',
  templateUrl: './Productos.component.html',
  styleUrls: ['./Productos.component.css']
})
export class ProductosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['nombre_producto', 'marca', 'precio_unitario', 'nombre_proveedor', 'hecho_para', 'modificar', 'eliminar']
  buscarTexto: string = '';

  data = [{
    nombre_producto: 'Mi mascot',
    marca: 'Pedigree',
    precio_unitario: 50,
    nombre_proveedor: 'Pronaca s.a',
    hecho_para: "Perros"
  },
  {
    nombre_producto: 'Wiscass',
    marca: 'Choun',
    precio_unitario: 20,
    nombre_proveedor: 'Pronaca s.a',
    hecho_para: "Gatos"
  },
  {
    nombre_producto: 'Mi mascot',
    marca: 'Pedigree',
    precio_unitario: 50,
    nombre_proveedor: 'Pronaca s.a',
    hecho_para: "perros"
  },
  {
    nombre_producto: 'Mi mascot',
    marca: 'Pedigree',
    precio_unitario: 50,
    nombre_proveedor: 'Pronaca s.a',
    hecho_para: "perros"
  },
  {
    nombre_producto: 'Mi mascot',
    marca: 'Pedigree',
    precio_unitario: 50,
    nombre_proveedor: 'Pronaca s.a',
    hecho_para: "perros"
  },
  {
    nombre_producto: 'Mi mascot',
    marca: 'Pedigree',
    precio_unitario: 50,
    nombre_proveedor: 'Pronaca s.a',
    hecho_para: "perros"
  },



  ];

  nuevoPaciente: any;
  nav: any;

  //Constructor que inicializa
  constructor(private router: Router, private dialog: MatDialog) {

    this.nav = this.router.getCurrentNavigation();
    this.nuevoPaciente = this.nav.extras.state;

    if (this.nuevoPaciente != null) {
      console.log(this.nuevoPaciente.datosCliente.queryParams);
      this.data.push(this.nuevoPaciente.datosCliente.queryParams);
    }

  };


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Interface_productos>(this.data as Interface_productos[]);
    console.log(this.data);
  }

  openDialogAgregar() {
    this.dialog.open(Agregar_productosComponent, {
      width: '50%',
    })
  }

  //Modifica registro de una tabla
  openDialogModificar(element: any): void {
    const dialogRef = this.dialog.open(Editar_productosComponent, {
      width: '50%',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.data.findIndex(item => item.nombre_producto === element.nombre_producto);
        if (index !== -1) {
          this.data[index].marca = result.nuevaMarca;
          this.data[index].precio_unitario = result.nuevaPrecioUnitario;
          this.data[index].nombre_proveedor = result.nuevaNombreProovedor;
          this.data[index].hecho_para = result.nuevaHechoPara;
          this.dataSource.data = this.data;
        }
      }
    });
  }



  //Elimina un registro de la tabla
  eliminarRegistro(index: number) {
    this.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<Interface_productos>(this.data as Interface_productos[]);
  }

  buscarRegistros() {
    const texto = this.buscarTexto.toLowerCase();
    const resultados = this.data.filter(
      item =>
        item.nombre_producto.toLowerCase().includes(texto) ||
        item.marca.toLowerCase().includes(texto) ||
        item.nombre_proveedor.toLowerCase().includes(texto) ||
        item.hecho_para.toLowerCase().includes(texto)
    );
    this.dataSource.data = resultados;
  }

}
