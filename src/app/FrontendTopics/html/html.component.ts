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
  constructor(private htmlservice: HtmlService) { }
  ngOnInit() {
    this.cards = this.htmlservice.getCards();

  }
  showPopup(cardTitle: string) {
    const card = this.htmlservice.getCardByTitle(cardTitle);
    if (card) {
      this.popupHeader = card.title;
      this.popupContent = card.popupContent;

      if (card.note) {
        this.popupContent += `<p style="color: red; margin-top: 10px;">${card.note}</p>`;
      }

      this.isPopupVisible = true;
    }
  }

  hidePopup() {
    this.isPopupVisible = false;
  }


}
