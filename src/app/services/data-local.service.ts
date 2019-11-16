import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[] = [];

  constructor() { }

  guardarRegistro(format: string, text: string) {
    const nuevo = new Registro(format, text);
    this.historial.unshift(nuevo);
    console.log('Datos ', this.historial);
    
  }

}
