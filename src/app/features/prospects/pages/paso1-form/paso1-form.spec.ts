import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso1Form } from './paso1-form';

describe('Paso1Form', () => {
  let component: Paso1Form;
  let fixture: ComponentFixture<Paso1Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso1Form],
    }).compileComponents();

    fixture = TestBed.createComponent(Paso1Form);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
