import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBodyComponent } from './content-body.component';

describe('ContentBodyComponent', () => {
  let component: ContentBodyComponent;
  let fixture: ComponentFixture<ContentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
