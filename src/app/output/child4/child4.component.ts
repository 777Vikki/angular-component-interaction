import { Component, OnInit, OnDestroy } from '@angular/core';
import {InteractionService} from '../interaction.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component implements OnInit, OnDestroy {

  subscritions: Subscription[] = [];

  constructor(private interactionServie: InteractionService) { }

  ngOnInit(): void {
    this.subscritions.push(this.interactionServie.student2Message$.subscribe(
      res => {
        alert(res);
      }
    ));
  }

  ngOnDestroy() {
    this.subscritions.forEach(subscription => {
      subscription.unsubscribe();
    });
    this.subscritions = [];
  }

}
