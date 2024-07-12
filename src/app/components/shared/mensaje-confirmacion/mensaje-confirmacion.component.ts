import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje-confirmacion',
  templateUrl: './mensaje-confirmacion.component.html',
  styleUrl: './mensaje-confirmacion.component.css'
})
export class MensajeConfirmacionComponent {

  readonly dialogRef = inject(MatDialogRef<MensajeConfirmacionComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
 btn: string = 'aceptar';
  mensaje:string = '';

  constructor(){
    this.mensaje = this.data.mensaje;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
