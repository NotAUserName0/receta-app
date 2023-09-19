import {Component} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  buttons = ["Mexicana", "Inglesa", "Picante", "Australiana", "Americana", "Espanola"]
  recetas = [{info: 1, liked: true}, {info: 2, liked: false}, {info: 3, liked: true}, {info: 4, liked: false}, {
    info: 5,
    liked: false
  }, {info: 6, liked: false}, {info: 7, liked: false}, {info: 8, liked: false}]
  tags = ["Mexicana", "Inglesa", "Picante", "Australiana"]

  constructor(private toastController: ToastController) {
  }

  abooutToLike(receta: any) {
    receta.liked = !receta.liked
    if (receta.liked) {
      this.presentToast("Agregado a Favoritos", "agregado")
    } else {
      this.presentToast("Eliminado de Favoritos", "eliminado")
    }

  }

  async presentToast(message: string, estado: 'agregado' | 'eliminado') {
    let icono
    if (estado === "agregado") {
      icono = "heart-circle-outline"
    } else {
      icono = "heart-dislike-circle-outline"
    }

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      icon: icono
    });

    await toast.present();
  }
}
