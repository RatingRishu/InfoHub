import { Component } from '@angular/core';

@Component({
  selector: 'app-gasp',
  templateUrl: './gasp.component.html',
  styleUrls: ['./gasp.component.css']
})
export class GASPComponent {
  isPopupVisible = false;
  popupHeader = '';

  showPopup(headerName: string) {
    this.popupHeader = headerName;
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
