import { Component, OnInit } from '@angular/core';
import { AngularService } from './angular.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent implements OnInit {
  isPopupVisible = false;
  popupHeader = '';
  popupContent = '';
  cards: any;
  
  constructor(private angularService: AngularService) {}
  
  ngOnInit(): void {
    this.cards = this.angularService.getCards();
  }

  showPopup(cardTitle: string) {
    const card = this.angularService.getCardByTitle(cardTitle);
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
