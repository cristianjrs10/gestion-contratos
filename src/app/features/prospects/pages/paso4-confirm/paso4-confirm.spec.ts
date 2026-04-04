import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso4Confirm } from './paso4-confirm';

describe('Paso4Confirm', () => {
  let component: Paso4Confirm;
  let fixture: ComponentFixture<Paso4Confirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso4Confirm],
    }).compileComponents();

    fixture = TestBed.createComponent(Paso4Confirm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
