import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ProspectService, ProspectData } from '../../services/prospect.service';

@Component({
  selector: 'app-paso3-signature',
  imports: [CommonModule,FormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule],
  templateUrl: './paso3-signature.html',
  styleUrl: './paso3-signature.scss',
  standalone: true
})
export class Paso3Signature {

  prospect!: ProspectData;
  accepted = false;
  metodo = 'simple';
  submitted = false;

  showFirma = true;
  signed = false;
  signatureHash: string | null = null;  
  
  constructor(
    private router: Router,
    private prospectService: ProspectService
  ) {
      this.prospect = this.prospectService.getProspect();

      if (!this.prospectService.hasData()) {
        this.router.navigate(['/paso1']);
      }      

       
      this.accepted = this.prospect.acceptedTerms;
    }

  volver() {
    this.router.navigate(['/paso2']);
  }

  continuar() {
    this.submitted = true;

    if (!this.accepted) return;
    if (!this.signed) return;

    this.prospect.acceptedTerms = this.accepted;
    
    // Aquí iría backend / firma real
    this.router.navigate(['/paso4']);
  }


  onAcceptedChange() {
    this.prospect.acceptedTerms = this.accepted;  
  }

  onMetodoChange() {
    this.showFirma = this.metodo === 'simple';
  }  

  firmar() {
    const prospect: ProspectData = this.prospectService.getProspect();

    // Crear una "firma simple" usando nombre, RUT y timestamp
    const dataToSign = `${prospect.nombre}|${prospect.rut}|${new Date().toISOString()}`;
    this.signatureHash = this.simpleHash(dataToSign);

    // Guardar en el prospect
    prospect.signatureHash = this.signatureHash;
    this.prospectService.setProspect(prospect);

    this.signed = true;
    console.log('Firmado correctamente', this.signatureHash);
  }
  
  private simpleHash(str: string): string {
    // Hash sencillo tipo checksum (no es criptográficamente seguro)
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convertir a 32bit integer
    }
    return 'SIG-' + Math.abs(hash);
  }  

}
