import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}
