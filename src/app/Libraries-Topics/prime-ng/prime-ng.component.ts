import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent {
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
