import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  opciones = {
    allowSlidePrev: false,
    allowSlideNext: false
  };
  constructor(private bcScanner: BarcodeScanner, private service: DataLocalService) {}

  //cuando la vista es cargada se dispara
  ionViewDidEnter() {}
  //cuando se cambia de vista o componente
  ionViewDidLeave() {}
  //cuando la vista va a cargar se dispara
  ionViewWillEnter() {
    this.scan();
  }
  //cuando se va a cerra la vista se dispara
  ionViewWillLeave() {}

  scan() {
    this.bcScanner.scan().then(response => {
      console.log('Abiendo Camera', response);
      if(!response.cancelled){
        this.service.guardarRegistro(response.format, response.text);
      }
    }).catch(error => {
      console.log('Error', error);
      this.service.guardarRegistro('QRCode', 'https://youtube.com');
    })
  }

}
