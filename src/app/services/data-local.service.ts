import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[] = [];

  constructor(private storage: Storage, private navCtrl: NavController, private navegador: InAppBrowser) { 
    this.cargarHistorial();
  }

  guardarRegistro(format: string, text: string) {
    const nuevo = new Registro(format, text);
    this.historial.unshift(nuevo);
    this.storage.set('registros', this.historial);
    this.abrirRegistro(nuevo);
  }

  async cargarHistorial() {
    const datos = await this.storage.get('registros');
    this.historial = datos || [];
  }

  abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward('/tabs/tab2');
    
    switch(registro.type) {
      case 'http':
        this.navegador.create(registro.text, '_system');
        break;
      default:
        this.navegador.create('https://www.google.com.ec');
        break;
    }
  }
}
