import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _student2MessageSource = new Subject<string>();
  student2Message$ = this._student2MessageSource.asObservable();

  constructor() { }

  sentStudent2Message(message: string) {
    this._student2MessageSource.next(message);
  }
}
