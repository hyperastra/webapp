import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'hyper-table',
  templateUrl: './table-view.component.html',
})
export class TableViewComponent implements OnInit {
  items = [];

  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < 200; index++) {
      const element = `${faker.company.catchPhrase()} ${faker.system.fileName()} ${faker.company.catchPhrase()} ${faker.system.fileName()} ${faker.company.catchPhrase()} ${faker.system.fileName()} ${faker.company.catchPhrase()} ${faker.system.fileName()}`;
      this.items.push(element);
    }
    console.log(this.items);
  }
}
