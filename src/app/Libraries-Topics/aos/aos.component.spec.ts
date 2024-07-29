import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOSComponent } from './aos.component';

describe('AOSComponent', () => {
  let component: AOSComponent;
  let fixture: ComponentFixture<AOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
