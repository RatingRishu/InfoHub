import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-popup',
  templateUrl: './feedback-popup.component.html',
  styleUrls: ['./feedback-popup.component.css']
})
export class FeedbackPopupComponent {
  @Output() closeModal = new EventEmitter<void>();

  // Close the modal
  close() {
    this.closeModal.emit();
  }

  // Close the modal if the background is clicked
  onBackgroundClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.close();
    }
  }
}
