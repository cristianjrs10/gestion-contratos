import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProspectService, ProspectData } from '../../services/prospect.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paso4-confirm',
  imports: [CommonModule,MatButtonModule],
  templateUrl: './paso4-confirm.html',
  styleUrl: './paso4-confirm.scss',
  standalone: true
})
export class Paso4Confirm {

  prospect!: ProspectData;
  fecha: string = '';

  constructor(
    private prospectService: ProspectService,
    private router: Router
  ) {
    this.prospect = this.prospectService.getProspect();
    this.fecha = this.getFechaActual();
    if (!this.prospectService.hasData()) {
      this.router.navigate(['/paso1']);
      return;
    } 

  }

  getFechaActual(): string {
    const now = new Date();
    return now.toLocaleString('es-CL');
  }

  volver() {
    this.router.navigate(['/paso3']);
  }

  enviar() {
    console.log('Contrato enviado');

    // Aquí irá integración backend
    alert('Contrato enviado correctamente');
  }

}
