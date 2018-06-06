import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GraficaPage } from '../grafica/grafica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

goGrafica(){
    this.navCtrl.push(GraficaPage);
  }

}
