import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProspectService, ProspectData } from '../../services/prospect.service';


@Component({
  selector: 'app-paso2-preview',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './paso2-preview.html',
  styleUrl: './paso2-preview.scss',
  standalone: true
})
export class Paso2Preview {

  prospect: ProspectData;
  submitted = false;
  today: Date = new Date();

  constructor(
    private prospectService: ProspectService,
    private router: Router
  ) {
    this.prospect = this.prospectService.getProspect();

    if (!this.prospectService.hasData()) {
      this.router.navigate(['/paso1']);
    }
  }

  getTituloContrato(): string {
    switch (this.prospect.tipoContrato) {
      case 'arriendo':
        return 'CONTRATO DE ARRIENDO';
      case 'compra':
        return 'CONTRATO DE COMPRAVENTA';
      case 'servicio':
        return 'CONTRATO DE PRESTACIÓN DE SERVICIOS';
      default:
        return 'CONTRATO';
    }
  }  


  getClausulas() {
    switch (this.prospect.tipoContrato) {

      case 'arriendo':
        return [
          {
            titulo: 'PRIMERA: OBJETO DEL CONTRATO',
            contenido: 'El arrendador entrega en arriendo al arrendatario el bien inmueble ubicado en 11.'
          },
          {
            titulo: 'SEGUNDA: PLAZO',
            contenido: 'El plazo del contrato se establece de acuerdo a las condiciones pactadas entre las partes.'
          },
          {
            titulo: 'TERCERA: PRECIO',
            contenido: 'El arrendatario pagará al arrendador la suma de $XXX.XXX mensuales.'
          },
          {
            titulo: 'CUARTA: OBLIGACIONES',
            contenido: 'El arrendatario se compromete a mantener el inmueble en buen estado y dar aviso de cualquier desperfecto.'
          },
          {
            titulo: 'QUINTA: TÉRMINO',
            contenido: 'El contrato podrá darse por terminado anticipadamente con aviso de 30 días de anticipación.'
          }
        ];

      case 'compra':
        return [
          {
            titulo: 'PRIMERA: OBJETO',
            contenido: 'El vendedor vende al comprador el bien descrito en los documentos adjuntos.'
          },
          {
            titulo: 'SEGUNDA: PRECIO',
            contenido: 'El precio total de la compraventa es de $XXX.XXX.XXX (pesos chilenos).'
          },
          {
            titulo: 'TERCERA: FORMA DE PAGO',
            contenido: 'El pago se efectuará en las siguientes condiciones: [Detallar forma de pago].'
          },
          {
            titulo: 'CUARTA: ENTREGA',
            contenido: 'La entrega del bien se realizará dentro de los 30 días siguientes a la firma del presente contrato.'
          },
          {
            titulo: 'QUINTA: GARANTÍA',
            contenido: 'El vendedor garantiza que el bien se encuentra libre de gravámenes y prohibiciones.'
          }
        ];

      case 'servicio':
        return [
          {
            titulo: 'PRIMERA: OBJETO',
            contenido: 'El prestador se compromete a prestar los servicios de [Descripción del servicio].'
          },
          {
            titulo: 'SEGUNDA: PLAZO',
            contenido: 'Los servicios se prestarán por el período de [Duración del contrato].'
          },
          {
            titulo: 'TERCERA: PRECIO',
            contenido: 'El cliente pagará al prestador la suma de $XXX.XXX por los servicios prestados.'
          },
          {
            titulo: 'CUARTA: OBLIGACIONES DEL PRESTADOR',
            contenido: `
              - Realizar los servicios con diligencia y profesionalismo <br>
              - Cumplir con los plazos acordados <br>
              - Mantener confidencialidad sobre la información del cliente
            `
          },
          {
            titulo: 'QUINTA: OBLIGACIONES DEL CLIENTE',
            contenido: `
              - Proporcionar la información necesaria para la prestación del servicio <br>
              - Realizar los pagos en los plazos acordados
            `
          }
        ];

      default:
        return [];
    }
  }  

  volver() {
    this.router.navigate(['/paso1']);
  }

  continuar() {
    this.submitted = true;

    // Aquí iría backend / firma real
    this.router.navigate(['/paso3']);
  }  
}
