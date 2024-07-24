import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {

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
