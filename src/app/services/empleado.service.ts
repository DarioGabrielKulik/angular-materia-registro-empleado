import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
listEmpleado: Empleado[] =[ 
{nombreCompleto:'Lucas Martinez', correo:'dario@gmail.com',
  telefono:'1157337089', sexo:'Masculino', fechaIngreso: new Date(), 
  estadoCivil: 'Soltero'
},
{nombreCompleto:'Dario kulik', correo:'dariojavi@gmail.com',
  telefono:'115732359', sexo:'Masculino', fechaIngreso: new Date(), 
  estadoCivil: 'Soltero'
},
{nombreCompleto:'Santino Martinez', correo:'darioJavier@gmail.com',
  telefono:'115123456', sexo:'Masculino', fechaIngreso: new Date(), 
  estadoCivil: 'Soltero'
},
{nombreCompleto:'Juanes Ocil', correo:'OcilJuanes@gmail.com',
  telefono:'117889451', sexo:'Masculino', fechaIngreso: new Date(), 
  estadoCivil: 'Casado'
}
]
  constructor() { }

  
  getEmpleado(){
   return this.listEmpleado.slice();
  }

  getDelete(index:number){
     this.listEmpleado.splice(index, 1);
  }

  agregarEmpleados(empleado:Empleado){
    this.listEmpleado.unshift(empleado);
  }
}
