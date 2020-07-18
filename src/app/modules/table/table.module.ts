import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './components/table-view/table-view.component';
import { HeaderCellComponent } from './components/header-cell/header-cell.component';

@NgModule({
  declarations: [TableViewComponent, HeaderCellComponent],
  imports: [CommonModule],
  exports: [TableViewComponent],
  providers: [],
})
export class TableModule {}
