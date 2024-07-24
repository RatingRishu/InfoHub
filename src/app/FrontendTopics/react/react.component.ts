import { Component } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent {

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
