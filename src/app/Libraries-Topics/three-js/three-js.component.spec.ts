import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeJsComponent } from './three-js.component';

describe('ThreeJsComponent', () => {
  let component: ThreeJsComponent;
  let fixture: ComponentFixture<ThreeJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
