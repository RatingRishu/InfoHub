import { Component } from '@angular/core';
import { CssService } from './css.service';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent {

   isPopupVisible = false;
  // popupHeader = '';
  // popupDescription = '';
  popupHeader = '';
  popupContent = '';
  cards: any;
   constructor(private cssService: CssService) { }
    ngOnInit() {
      this.cards = this.cssService.getCards();
  
    }
    showPopup(cardTitle: string) {
      const card = this.cssService.getCardByTitle(cardTitle);
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
