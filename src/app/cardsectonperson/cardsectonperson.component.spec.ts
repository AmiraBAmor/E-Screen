import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsectonpersonComponent } from './cardsectonperson.component';

describe('CardsectonpersonComponent', () => {
  let component: CardsectonpersonComponent;
  let fixture: ComponentFixture<CardsectonpersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsectonpersonComponent]
    });
    fixture = TestBed.createComponent(CardsectonpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
