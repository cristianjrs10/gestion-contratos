import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { ProspectService, ProspectData } from '../../services/prospect.service';

@Component({
  selector: 'app-paso1-form',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule
  ],
  templateUrl: './paso1-form.html',
  styleUrl: './paso1-form.scss',
  standalone: true
})
export class Paso1Form {

  form: ProspectData = {
    nombre: '',
    rut: '',
    documento: '',
    rutEmpresa: '',
    email: '',
    telefono: '',
    direccion: '',
    region: '',
    comuna: '',
    tipoContrato: 'arriendo',
    acceptedTerms: false,
    uploadedFile: null,
    signatureHash: ''
  };

  // 🔥 NUEVO
  selectedFile: File | null = null;
  fileError: string = '';

  // 🔥 CONFIG
  maxSize = 10 * 1024 * 1024; // 10MB
  allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'application/pdf'
  ];

  constructor(
    private router: Router,
    private prospectService: ProspectService
  ) {

    this.form = this.prospectService.getProspect();

    // si ya había un archivo subido, lo mostramos
    if (this.form.uploadedFile) {
      this.selectedFile = this.form.uploadedFile;
    }

  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.fileError = '';
    this.selectedFile = null;

    if (!file) return;

    if (!this.allowedTypes.includes(file.type)) {
      this.fileError = 'Solo se permiten imágenes (JPG, PNG) o PDF';
      return;
    }

    if (file.size > this.maxSize) {
      this.fileError = 'El archivo no debe superar los 10 MB';
      return;
    }

    // ✅ OK
    this.selectedFile = file;

    // opcional: guardar nombre en form
    this.form.uploadedFile = file;
  }

  // 🔥 CONTINUAR
  continuar() {

    // opcional: exigir archivo
    if (!this.selectedFile) {
      this.fileError = 'Debes subir un documento';
      return;
    }

    // 🔥 guardas datos
    this.prospectService.setProspect(this.form);

    // 👉 aquí podrías guardar el file en el service también si quieres
    // this.prospectService.setFile(this.selectedFile);

    this.router.navigate(['/paso2']);
  }

}