import { Component, ElementRef, Renderer2 } from '@angular/core';
import { WebapiService } from './webapi.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent {
  isPopupVisible = false;
  popupHeader = '';
  popupDescription = '';

  popupContent = '';
  cards: any;
  constructor(private webapiservice: WebapiService, private renderer: Renderer2, private el: ElementRef, private router: Router) { }
  ngOnInit(): void {
    this.cards = this.webapiservice.getCards();
  }

  showPopup(cardTitle: string) {
    const card = this.webapiservice.getCardByTitle(cardTitle);
    if (card) {
      this.popupHeader = card.title;
      this.popupContent = card.popupContent;
      this.isPopupVisible = true;
      setTimeout(() => this.applyRouterLink(), 0);
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
