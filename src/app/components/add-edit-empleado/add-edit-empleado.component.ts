import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrl: './add-edit-empleado.component.css'
})
export class AddEditEmpleadoComponent {
image:string='https://img.freepik.com/vector-gratis/ilustracion-concepto-compromiso-empleados_114360-20413.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=sph'
estadoCivil: any[]=['Soltero', 'Casado', 'Divorciado']
myForm:FormGroup;

constructor(private fb:FormBuilder, private _sEmpleado:EmpleadoService, private route:Router){
  this.myForm = this.fb.group({
    nombreCompleto:['', Validators.required],
    correo:['', Validators.required],
    fechaIngreso:['', Validators.required],
    telefono:['', Validators.required],
    estadoCivil:['', Validators.required],
    sexo:['', Validators.required]
  });
}

guardarEmpleado(){
  const empleado: Empleado = {
  nombreCompleto: this.myForm.get('nombreCompleto')?.value,
  correo: this.myForm.get('correo')?.value,
  fechaIngreso: this.myForm.get('fechaIngreso')?.value,
  telefono: this.myForm.get('telefono')?.value,
  estadoCivil: this.myForm.get('estadoCivil')?.value,
  sexo: this.myForm.get('sexo')?.value,
  };
  this._sEmpleado.agregarEmpleados(empleado);
  this.route.navigate(['/']);
}

}
