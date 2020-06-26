import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  // Input is Used both types
  @Input() loggedIn: boolean;
  @Input('childLoggedIn') isLogged: boolean;
  private _isChildShowMessage: boolean;
  childShowMessage: string;

  get isChildShowMessage(): boolean {
    return this._isChildShowMessage;
  }

  @Input()
  set isChildShowMessage(value: boolean) {
    this._isChildShowMessage = value;
    this.childShowMessage = value
      ? 'Welcome ChildShowMessage'
      : 'Please click Show';
  }

  constructor() {}
}
