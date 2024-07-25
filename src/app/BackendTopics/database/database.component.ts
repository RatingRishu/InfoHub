import { Component } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent {
  isPopupVisible = false;
  popupHeader = '';
  popupDescription = '';

  showPopup(card: HTMLDivElement) {
    const cardTitleElement = card.querySelector('.card-title');
    const cardDescriptionElement = card.querySelector('.small-desc');

    if (cardTitleElement instanceof HTMLElement) {
      this.popupHeader = cardTitleElement.innerText;
    }

    if (cardDescriptionElement instanceof HTMLElement) {
      this.popupDescription = cardDescriptionElement.innerText;
    }
    
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
