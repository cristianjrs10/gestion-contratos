import { Injectable } from '@angular/core';

export interface ProspectData {
  nombre: string;
  rut: string;
  documento: string;
  rutEmpresa: string;
  email: string;
  telefono: string;
  direccion: string;
  region: string;
  comuna: string;
  tipoContrato: string;
  acceptedTerms: boolean;
  uploadedFile: null | File;
  signatureHash: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  private prospect: ProspectData = {
    nombre: '',
    rut: '',
    documento: '',
    rutEmpresa: '',
    email: '',
    telefono: '',
    region: '',
    direccion: '',
    comuna: '',
    tipoContrato: 'arriendo',
    acceptedTerms: false,
    uploadedFile: null,
    signatureHash: ''
  };

  setProspect(data: ProspectData) {
    this.prospect = { ...data };
  }

  getProspect(): ProspectData {
    return this.prospect;
  }

  hasData(): boolean {
    return Boolean(this.prospect.nombre || this.prospect.rut || this.prospect.email || this.prospect.telefono || this.prospect.direccion);
  }
}
