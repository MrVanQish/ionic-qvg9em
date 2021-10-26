import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userDefault: string = '';
  passDefault: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public usuarioService: UsuariosService) {
    
    this.usuarioService.getUsuarios().subscribe(x => this.userDefault = x.usuarios[0].user);

    this.usuarioService.getUsuarios().subscribe(x => this.passDefault = x.usuarios[0].password);


  }


  goAnOtherPage() {


    
    if(this.userDefault === 'vargas' && this.passDefault === '123'){
      this.navCtrl.setRoot(HomePage);
    }else{
      let alert = this.alertCtrl.create({
        title: 'Contraseña o usuario incorrectos',
        buttons: ['Ok']
      });
      alert.present();
    }  
  }

  



}