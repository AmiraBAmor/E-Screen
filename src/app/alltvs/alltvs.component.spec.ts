import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltvsComponent } from './alltvs.component';

describe('AlltvsComponent', () => {
  let component: AlltvsComponent;
  let fixture: ComponentFixture<AlltvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltvsComponent]
    });
    fixture = TestBed.createComponent(AlltvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
