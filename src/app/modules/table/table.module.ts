import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { ButtonModule } from '../button/button.module';
import { CheckboxModule } from '../checkbox/checkbox.module';



@NgModule({
  declarations: [
    TableComponent,
    TableRowComponent,
    TableCellComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule
  ],
  exports: [
    TableComponent,
    TableRowComponent,
    TableCellComponent
  ],
})
export class TableModule { }
