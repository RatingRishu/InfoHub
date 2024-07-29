import { Component } from '@angular/core';
import { AosService } from './aos.service';

@Component({
  selector: 'app-aos',
  templateUrl: './aos.component.html',
  styleUrls: ['./aos.component.css']
})
export class AOSComponent {
  isPopupVisible = false;
  popupHeader = '';
  popupContent = '';
  cards: any;
  
  constructor(private aosService: AosService) {}
  
  ngOnInit(): void {
    this.cards = this.aosService.getCards();
  }

  showPopup(cardTitle: string) {
    const card = this.aosService.getCardByTitle(cardTitle);
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
