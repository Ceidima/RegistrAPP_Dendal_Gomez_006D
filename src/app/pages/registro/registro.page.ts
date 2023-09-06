import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario={
    rut:'',
    email:'',
    edad:'',
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
      message: 'Se ha registrado exitosamente.',
      buttons: ['OK'],
    });

    await alert.present();
    this.usuario.rut='';
    this.usuario.email='';
    this.usuario.password='';
  }

}
