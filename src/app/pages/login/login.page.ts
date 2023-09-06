import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario={
    email:'',
    password:'',
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }
  
  async Enviar(){
    const alert = await this.alertController.create({
      header: 'Bienvenido.',
      message: 'Has ingresado con éxito.',
      buttons: ['OK'],
    });

    await alert.present();
    this.usuario.email='';
    this.usuario.password='';
  }
}
