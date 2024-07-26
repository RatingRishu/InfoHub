import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, 
  Input, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputProperty: string = '';

  
 ngOnDestroy() {
    console.log('ngOnDestroy: Called once the component is about to be destroyed.');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Called when any data-bound input properties change.', changes);
  }
  

  ngOnInit() {
    console.log('ngOnInit: Called once the component has been initialized.');
  }

  ngDoCheck() {
    console.log('ngDoCheck: Called during every change detection run.');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Called after content (ng-content) has been projected into view.');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Called after every check of projected content.');
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit: Called after a component's view (and child views) has been initialized.`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked: Called after every check of a component's view (and child views).`);
  }

 
  constructor() {
    console.log('Constructor: Called once the component is instantiated.');
  }
}
