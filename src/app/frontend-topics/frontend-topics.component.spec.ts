import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendTopicsComponent } from './frontend-topics.component';

describe('FrontendTopicsComponent', () => {
  let component: FrontendTopicsComponent;
  let fixture: ComponentFixture<FrontendTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
