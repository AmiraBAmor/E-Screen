import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstickerComponent } from './newsticker.component';

describe('NewstickerComponent', () => {
  let component: NewstickerComponent;
  let fixture: ComponentFixture<NewstickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewstickerComponent]
    });
    fixture = TestBed.createComponent(NewstickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
