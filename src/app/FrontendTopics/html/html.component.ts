import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent {
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
