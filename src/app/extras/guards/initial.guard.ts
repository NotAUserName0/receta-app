import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const initialGuard: CanActivateFn = (route, state) => {
  const sessionInit = sessionStorage.getItem('init')
  //const sessionInit = localStorage.getItem("init")
  const router = inject(Router)

  if(sessionInit === 'true'){
    return true; //deja pasar al app
  }

  return false; //pagina redirecciona a pagina de error

};
