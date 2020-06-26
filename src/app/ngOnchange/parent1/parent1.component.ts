import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit, AfterViewInit {
  fName: string;
  @ViewChild(Child1Component) childComponentRef: Child1Component;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.childComponentRef.greet();
  }

  changeChildTitle() {
    this.childComponentRef.pageTitle = "Parent Child Interaction";
  }
}
