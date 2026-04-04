import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso2Preview } from './paso2-preview';

describe('Paso2Preview', () => {
  let component: Paso2Preview;
  let fixture: ComponentFixture<Paso2Preview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso2Preview],
    }).compileComponents();

    fixture = TestBed.createComponent(Paso2Preview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
