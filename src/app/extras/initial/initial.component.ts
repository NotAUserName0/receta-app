import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  //este componente revisa que la url del back end funcione correctamente
  //y que haya internet

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      sessionStorage.setItem('init', String(true))
      this.router.navigate(['/app']);
    }, 3000);
  }//crear variable temporal para decile al app que siempre rediriga a app y no se use este menu
}
