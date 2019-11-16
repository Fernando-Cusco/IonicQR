import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //cuando la vista es cargada se dispara
  ionViewDidEnter() {
    console.log('did Enter');
  }
  //cuando se cambia de vista o componente
  ionViewDidLeave() {
    console.log('Cuando ya salio del punto de vista del usuario');
  }
  //cuando la vista va a cargar se dispara
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  //cuando se va a cerra la vista se dispara
  ionViewWillLeave() {
    console.log('Cuando ya se va a cerrar la vista');
  }

  constructor() {}

}
