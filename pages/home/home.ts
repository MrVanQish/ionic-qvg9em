import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  goToEnviar(){

    let alert = this.alertCtrl.create({
      title: 'Enviado',
      buttons: ['Ok']
    });
    alert.present();

  }

}
