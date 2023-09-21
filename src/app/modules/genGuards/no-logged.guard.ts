import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const sessionGuard: CanActivateFn = (route, state) => {
  const token = false; //variable temporal para simular un inicio de session
  const router = inject(Router)

  if (token) {
    return true;
  }
  return router.navigate(['/logged']);
};
