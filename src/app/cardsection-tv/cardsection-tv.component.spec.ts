import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsectionTvComponent } from './cardsection-tv.component';

describe('CardsectionTvComponent', () => {
  let component: CardsectionTvComponent;
  let fixture: ComponentFixture<CardsectionTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsectionTvComponent]
    });
    fixture = TestBed.createComponent(CardsectionTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
