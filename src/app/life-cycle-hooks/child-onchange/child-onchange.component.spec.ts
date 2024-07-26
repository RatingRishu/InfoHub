import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnchangeComponent } from './child-onchange.component';

describe('ChildOnchangeComponent', () => {
  let component: ChildOnchangeComponent;
  let fixture: ComponentFixture<ChildOnchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOnchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
