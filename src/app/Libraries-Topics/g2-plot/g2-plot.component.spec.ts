import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2PlotComponent } from './g2-plot.component';

describe('G2PlotComponent', () => {
  let component: G2PlotComponent;
  let fixture: ComponentFixture<G2PlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G2PlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G2PlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
