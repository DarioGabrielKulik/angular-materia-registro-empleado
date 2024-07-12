import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { EmpleadoService } from '../../services/empleado.service';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrl: './list-empleado.component.css'
})
export class ListEmpleadoComponent {
  displayedColumns: string[] = ['nombreCompleto', 'telefono', 'correo', 'fechaIngreso', 'estadoCivil', 'sexo','acciones'];
  dataSource = new MatTableDataSource();
listaEmpleados: any[]=[]
readonly dialog = inject(MatDialog);

  constructor(private _listEmpleado:EmpleadoService, public snackbar: MatSnackBar) {
    
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(){
    this.cargarEmpleados();
  }

  cargarEmpleados(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.listaEmpleados = this._listEmpleado.getEmpleado();
    this.dataSource = new MatTableDataSource(this.listaEmpleados);
    console.log(this.listaEmpleados)
  }

  eliminarEmpleado(index:number){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
   data: {mensaje:'¿Estas seguro que desea eliminar el empleado?'}});

   dialogRef.afterClosed().subscribe(result => {
    if(result === 'aceptar'){
      this._listEmpleado.getDelete(index);
      this.cargarEmpleados();
      this.snackbar.open('El empleado fue eliminado con exito', '', {duration:2000});
    }
   
    })   
  }
}
