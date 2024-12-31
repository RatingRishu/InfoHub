import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  // showPopup = true;

  // ngOnInit(): void {
  //   // Hide the popup after 10 seconds
  //   setTimeout(() => {
  //     this.showPopup = false;
  //   }, 10000); // 10 seconds
  // }

  showPopup = true;

  ngOnInit(): void {
    // Automatically hide the popup after 10 seconds
    setTimeout(() => {
      this.showPopup = false;
    }, 10000);
  }

  ngAfterViewInit(): void {
    this.triggerConfetti();
  }

  // Trigger the confetti effect using canvas-confetti
  triggerConfetti(): void {
    const duration = 5 * 1000; // 10 seconds
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0 }
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0 }
      });

      if (Date.now() > end) {
        clearInterval(interval);
      }
    }, 250);
  }

  // Close the popup manually
  closePopup(): void {
    this.showPopup = false;
  }
}
function confetti(arg0: { particleCount: number; angle: number; spread: number; origin: { x: number; y: number; }; }) {
  throw new Error('Function not implemented.');
}

