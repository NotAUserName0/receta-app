import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const initialGuard: CanActivateFn = (route, state) => {
  const sessionInit = sessionStorage.getItem('init')
  const router = inject(Router)

  if (sessionInit === 'true') {
    return true;
  }
  return false;
};
