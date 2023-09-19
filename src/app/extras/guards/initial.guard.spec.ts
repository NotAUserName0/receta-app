import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { initialGuard } from './initial.guard';

describe('initialGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => initialGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
