import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-confirmation-dialog',
  templateUrl: './blog-confirmation-dialog.component.html',
  styleUrls: ['./blog-confirmation-dialog.component.css']
})
export class BlogConfirmationDialogComponent {

  @Input() message: string = '';
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
