import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-onchange',
  templateUrl: './parent-onchange.component.html',
  styleUrls: ['./parent-onchange.component.css']
})
export class ParentOnchangeComponent {
  parentInput: string = 'Initial Value';

  changeInput() {
    this.parentInput = `Updated Value ${Math.floor(Math.random() * 100)}`;
  }
}
