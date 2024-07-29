import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesTopicComponent } from './libraries-topic.component';

describe('LibrariesTopicComponent', () => {
  let component: LibrariesTopicComponent;
  let fixture: ComponentFixture<LibrariesTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrariesTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
