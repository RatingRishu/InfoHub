import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GASPComponent } from './gasp.component';

describe('GASPComponent', () => {
  let component: GASPComponent;
  let fixture: ComponentFixture<GASPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GASPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GASPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
