import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOnchangeComponent } from './parent-onchange.component';

describe('ParentOnchangeComponent', () => {
  let component: ParentOnchangeComponent;
  let fixture: ComponentFixture<ParentOnchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOnchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
