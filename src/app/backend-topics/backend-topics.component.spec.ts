import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendTopicsComponent } from './backend-topics.component';

describe('BackendTopicsComponent', () => {
  let component: BackendTopicsComponent;
  let fixture: ComponentFixture<BackendTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
