import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogConfirmationDialogComponent } from './blog-confirmation-dialog.component';

describe('BlogConfirmationDialogComponent', () => {
  let component: BlogConfirmationDialogComponent;
  let fixture: ComponentFixture<BlogConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
