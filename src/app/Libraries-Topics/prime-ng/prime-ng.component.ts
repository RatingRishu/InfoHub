import { Component } from '@angular/core';
import { PrimeNgService } from './prime-ng.service';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent {
  isPopupVisible = false;
  popupHeader = '';
  popupContent = '';
  cards: any;
  
  constructor(private primengservice: PrimeNgService) {}
  
  ngOnInit(): void {
    this.cards = this.primengservice.getCards();
  }

  showPopup(cardTitle: string) {
    const card = this.primengservice.getCardByTitle(cardTitle);
    if (card) {
      this.popupHeader = card.title;
      this.popupContent = card.popupContent;
      this.isPopupVisible = true;
    }
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
