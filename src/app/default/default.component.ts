// import { Component } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  targetDate: Date = new Date('2024-12-31T23:59:59'); // Set your target date here
  subscription!: Subscription;

  ngOnInit() {
    // Update the countdown every second
    this.subscription = interval(1000).subscribe(() => this.updateCountdown());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateCountdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = this.targetDate.getTime() - currentTime;

    if (timeRemaining > 0) {
      this.days = Math.floor(timeRemaining / (10000 * 60 * 60 * 24));
      this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    } else {
      this.days = this.hours = this.minutes = this.seconds = 0; // Set all values to 0 if time is up
    }
  }

}
