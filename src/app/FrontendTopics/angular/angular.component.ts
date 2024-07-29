import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AngularService } from './angular.service';
import { Router } from '@angular/router';

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
  
  constructor(private angularService: AngularService, private renderer: Renderer2, private el: ElementRef, private router: Router) {}
  
  ngOnInit(): void {
    this.cards = this.angularService.getCards();
  }

  showPopup(cardTitle: string) {
    const card = this.angularService.getCardByTitle(cardTitle);
    if (card) {
      this.popupHeader = card.title;
      this.popupContent = card.popupContent;
      this.isPopupVisible = true;
      setTimeout(() => this.applyRouterLink(), 0);  // Apply the routerLink after content is rendere
    }
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  applyRouterLink() {
    const dynamicLink = this.el.nativeElement.querySelector('#dynamicRouterLink');
    if (dynamicLink) {
      this.renderer.listen(dynamicLink, 'click', () => {
        this.router.navigate(['/parent']);
      });
    }
  }
}
