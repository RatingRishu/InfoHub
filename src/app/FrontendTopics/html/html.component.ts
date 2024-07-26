import { Component, ElementRef } from '@angular/core';
import { HtmlService } from './html.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent {
  isPopupVisible = false;
  // popupHeader = '';
  // popupDescription = '';
  popupHeader = '';
  popupContent = '';
  cards: any;
  constructor (private htmlservice: HtmlService) {}
  ngOnInit() { 
    this.cards = this.htmlservice.getCards();

  }
  showPopup(cardTitle: string) {
    const card = this.htmlservice.getCardByTitle(cardTitle);
    if (card) {
      this.popupHeader = card.title;
      this.popupContent = card.popupContent;
      this.isPopupVisible = true;
    }
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
  // showPopup(card: HTMLDivElement) {
  //   const cardTitleElement = card.querySelector('.card-title');
  //   const cardDescriptionElement = card.querySelector('.small-desc');

  //   if (cardTitleElement instanceof HTMLElement) {
  //     this.popupHeader = cardTitleElement.innerText;
  //   }

  //   if (cardDescriptionElement instanceof HTMLElement) {
  //     this.popupDescription = cardDescriptionElement.innerText;
  //   }
    
  //   this.isPopupVisible = true;
  // }

  // hidePopup() {
  //   this.isPopupVisible = false;
  // }

}
