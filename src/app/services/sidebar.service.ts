import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Sidebar {
  private _opened = new BehaviorSubject<boolean>(true);

  get opened(): BehaviorSubject<boolean> {
    return this._opened;
  }

  toggle() {
    const opened = this._opened.value;
    this._opened.next(!opened);
  }
}
