import { Component } from '@angular/core';
import { Sidebar } from '@hyper/services';
@Component({
  selector: 'hyper-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(public sidebar: Sidebar) {}
}
