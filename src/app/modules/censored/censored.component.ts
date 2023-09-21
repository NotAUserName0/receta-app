import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-censored',
  templateUrl: './censored.component.html',
  styleUrls: ['./censored.component.css']
})
export class CensoredComponent {

  constructor(private navCtrl: NavController) {
  }

  irAtras() {
    this.navCtrl.back(); // Navega hacia la vista anterior o a una ruta específica
  }

}
