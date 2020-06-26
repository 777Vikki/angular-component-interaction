import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() greetEvent = new EventEmitter<null>();
  @Output() nameEvent = new EventEmitter<string>();
  @Output() titleEvent = new EventEmitter<string>();
  name = "Hello Vivek Maurya";
  title = "Maurya";

  constructor() { }

  ngOnInit(): void {
  }

  callParentGreed() {
    this.greetEvent.next();
  }

  callParentName() {
    this.nameEvent.next(this.name);
  }

  callParentTitle() { 
    this.titleEvent.next(this.title);
  }

}
