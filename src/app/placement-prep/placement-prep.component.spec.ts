import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementPrepComponent } from './placement-prep.component';

describe('PlacementPrepComponent', () => {
  let component: PlacementPrepComponent;
  let fixture: ComponentFixture<PlacementPrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementPrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
