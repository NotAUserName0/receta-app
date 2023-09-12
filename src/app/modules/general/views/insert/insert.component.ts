import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

  constructor(private navCtrl: NavController) {}

  irAtras() {
    this.navCtrl.navigateBack('/'); // Navega hacia la vista anterior o a una ruta específica
  }
}
