import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
  let component: BootstrapComponent;
  let fixture: ComponentFixture<BootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
