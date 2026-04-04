import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso3Signature } from './paso3-signature';

describe('Paso3Signature', () => {
  let component: Paso3Signature;
  let fixture: ComponentFixture<Paso3Signature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso3Signature],
    }).compileComponents();

    fixture = TestBed.createComponent(Paso3Signature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
