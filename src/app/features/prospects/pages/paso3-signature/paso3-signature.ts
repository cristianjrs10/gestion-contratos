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
  showFirma = false;
  
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
    console.log('Firmado correctamente');
  }  

}
