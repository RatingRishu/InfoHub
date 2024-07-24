import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent {

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
