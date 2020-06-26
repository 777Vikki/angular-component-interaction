import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

interface Ifriend {
  name: string;
  address: string;
}

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnChanges {
  @Input() name: string;
  friendDetail: Ifriend;
  pageTitle: string;
  constructor() {}

  greet() {
    alert("Hi Vivek");
  }

  ngOnChanges(changes: SimpleChanges) {
    switch (changes['name'].currentValue) {
      case 'vivek': {
        this.friendDetail = {
          name: 'Vivek Maurya',
          address: 'Varanasi',
        };
        break;
      }
      case 'ankur': {
        this.friendDetail = {
          name: 'Ankur Shukla',
          address: 'Lucknow',
        };
        break;
      }
      case 'amar': {
        this.friendDetail = {
          name: 'Amar Pandey',
          address: 'Gonda',
        };
        break;
      }
      case 'uttam': {
        this.friendDetail = {
          name: 'Uttam Shukla',
          address: 'Baharaich',
        };
        break;
      }
      case 'ajeet': {
        this.friendDetail = {
          name: 'Ajeet Yadav',
          address: 'Varanasi',
        };
        break;
      }
    }
  }
}
