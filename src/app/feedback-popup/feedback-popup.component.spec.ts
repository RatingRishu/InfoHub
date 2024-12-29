import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPopupComponent } from './feedback-popup.component';

describe('FeedbackPopupComponent', () => {
  let component: FeedbackPopupComponent;
  let fixture: ComponentFixture<FeedbackPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
