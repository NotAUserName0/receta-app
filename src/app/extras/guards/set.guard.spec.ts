import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { setGuard } from './set.guard';

describe('setGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => setGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
