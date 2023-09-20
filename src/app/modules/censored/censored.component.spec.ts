import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoredComponent } from './censored.component';

describe('CensoredComponent', () => {
  let component: CensoredComponent;
  let fixture: ComponentFixture<CensoredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CensoredComponent]
    });
    fixture = TestBed.createComponent(CensoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
