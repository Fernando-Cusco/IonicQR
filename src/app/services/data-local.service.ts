import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[] = [];

  constructor(private storage: Storage) { 
    this.cargarHistorial();
  }

  guardarRegistro(format: string, text: string) {
    const nuevo = new Registro(format, text);
    this.historial.unshift(nuevo);
    this.storage.set('registros', this.historial);
    console.log('Datos ', this.historial);
  }

  async cargarHistorial() {
    const datos = await this.storage.get('registros');
    this.historial = datos || [];

  }

}
