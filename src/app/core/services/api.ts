import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/environment'; 


@Injectable({
  providedIn: 'root',
})
export class Api {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    return this.http.get(`${this.api}/${endpoint}`);
  }

  post(endpoint: string, body: any) {
    return this.http.post(`${this.api}/${endpoint}`, body);
  }

}
