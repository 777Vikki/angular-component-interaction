import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  greetFriend() {
    this.interactionService.sentStudent2Message("Hi Friend");
  }

  appFriend() {
    this.interactionService.sentStudent2Message("App Friend");
  }

}
