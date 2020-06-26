import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-basic-interaction',
  templateUrl: './basic-interaction.component.html',
  styleUrls: ['./basic-interaction.component.scss']
})
export class BasicInteractionComponent implements AfterViewInit {
  pageTitle = 'Angular Component Interaction';
  imgUrl ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtQbOkP-M77CEDwAqzgEzKH2Gr6GTW23VNVA&usqp=CAU'
  count = 0;
  name: string;
  address1: string;
  address2: string;
  userName: string;
  @ViewChild('usernameRef') nameElementRef: ElementRef;
  private _customerName: string


  ngAfterViewInit() {
    // At the time of page load, cursor will be on username input element 
    this.nameElementRef.nativeElement.focus();
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  incrementCount() {
    this.count += 1;
  }

  changeAddress(userAdd) {
    this.address2=userAdd;
  }

  getAdd(dd) {
    console.log(dd);
  }

}
