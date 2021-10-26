import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public quejas: any;

  constructor(public navCtrl: NavController, private usuarioService: UsuariosService ) {

    this.usuarioService.getQuejas().subscribe(x => this.quejas = x.quejas)

  }

  

}
