import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  buttons = ["Mexicana", "Inglesa", "Picante", "Australiana", "Americana", "Espanola"]
  recetas = [{info:1,liked:true},{info:2,liked:false},{info:3,liked:true},{info:4,liked:false},{info:5,liked:false},{info:6,liked:false},{info:7,liked:false},{info:8,liked:false}]
  tags = ["Mexicana", "Inglesa", "Picante", "Australiana"]

  constructor() {
  }
  abooutToLike(receta:any){
    receta.liked = !receta.liked
  }
}
