import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '@hyper/components';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  imports: [CommonModule, DashboardRoutingModule, MatSidenavModule],
})
export class DashboardModule {}
