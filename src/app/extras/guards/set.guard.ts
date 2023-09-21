import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const setGuard: CanActivateFn = (route, state) => {
  //const sessionInit = sessionStorage.getItem('init')
  const sessionInit = localStorage.getItem("init")
  const router = inject(Router)

  if(sessionInit === 'true'){
    router.navigate(['/app'])
    return false
  }

  return true;

};

