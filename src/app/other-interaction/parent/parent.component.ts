import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  userLoggedIn = true;
  userChildLoggedIn = true;
  fName = "vivek"
  isShowMessage:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
