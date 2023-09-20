import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const initialGuard: CanActivateFn = (route, state) => {
  const token = false;
  const router = inject(Router)

  if (token) {
    return true;
  }
  return router.navigate(['/logged']);
};
