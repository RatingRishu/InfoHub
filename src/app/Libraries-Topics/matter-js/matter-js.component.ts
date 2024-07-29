import { Component } from '@angular/core';

@Component({
  selector: 'app-matter-js',
  templateUrl: './matter-js.component.html',
  styleUrls: ['./matter-js.component.css']
})
export class MatterJsComponent {
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
