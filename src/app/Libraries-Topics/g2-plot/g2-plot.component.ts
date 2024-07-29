import { Component } from '@angular/core';

@Component({
  selector: 'app-g2-plot',
  templateUrl: './g2-plot.component.html',
  styleUrls: ['./g2-plot.component.css']
})
export class G2PlotComponent {
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
