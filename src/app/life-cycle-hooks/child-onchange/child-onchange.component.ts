import { Component , Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-onchange',
  templateUrl: './child-onchange.component.html',
  styleUrls: ['./child-onchange.component.css']
})
export class ChildOnchangeComponent implements OnChanges {

  @Input() inputProperty!: string;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      this.changeLog.push(`Input property '${propName}' changed from ${previous} to ${current}`);
      console.log(`Input property '${propName}' changed from ${previous} to ${current}`)
      console.log("on change called from child")
    }
  }
}
