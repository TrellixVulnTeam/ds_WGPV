import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { iTableData, iTableRow } from '../../models/table.interfaces';

@Component({
  selector: 'sr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  private _selectedRows: iTableRow[] = []
  isAllSelected!: boolean;

  isMobileView!: boolean;

  constructor() {
   this.isMobileView = window.innerWidth < 769
  }

  // @ enable multi-select feature for table rows @ //
  @Input() enableSelection?: boolean;

  // @ initialize with selected rows by default by passing them here @ //
  @Input() set selectedRows(rows: iTableRow[]) {
    this._selectedRows = rows
    this.isAllSelected = this._selectedRows.length == this.dataSource.bodyData.length
  }

  // @ table data @ //
  @Input() dataSource!: iTableData;

  // @ switch between [card / list] view (changes design only) @ //
  @Input() cardView?: boolean;

  // @ add a class to hostElement to change styles for card view @ //
  @HostBinding('class') get hostClass(): string {
    return this.cardView ? 'card-view' : ''
  }

  @Output() onSort = new EventEmitter()

  // @ fire an event upon selection change @ //
  @Output() selectionChange = new EventEmitter<iTableRow[]>()


  onHeaderRowSelectionChange(state: boolean): void {
    if (this.dataSource.selectionCallback) {
      if (this.dataSource.selectionCallback.override)
        this.dataSource.selectionCallback.callback({type: 'bulk', data: state})
      else {
        // select or deSelect all rows
        if (state) {
          this._selectedRows = [...this.dataSource.bodyData]
          this.isAllSelected = true
        } 
        else {
          this._selectedRows = []
          this.isAllSelected = false
        }
        // emit the selectionChange event
        this.selectionChange.emit(this._selectedRows)
        
        this.dataSource.selectionCallback.callback({type: 'bulk', data: state})
      }
    }
    else {
      // select or deSelect all rows
      if (state) {
        this._selectedRows = [...this.dataSource.bodyData]
        this.isAllSelected = true
      } 
      else {
        this._selectedRows = []
        this.isAllSelected = false
      }
      // emit the selectionChange event
      this.selectionChange.emit(this._selectedRows)
    }
  }

  onRowSelectionChange(data: any): void {
    if (this.dataSource.selectionCallback) {
      if (this.dataSource.selectionCallback.override) 
        this.dataSource.selectionCallback.callback({type: 'single', data})
      else {
      // select or deSelect a specific row
      if (data.state == 'checked') this._selectedRows.push(data.row)
      else {
        let row: any = this._selectedRows.find((r: iTableRow) => r.id == data.row.id)
        let idx = this._selectedRows.indexOf(row)
        this._selectedRows.splice(idx, 1)
      }
      // set selection state and emit the selectionChange event
      this.isAllSelected = this._selectedRows.length == this.dataSource.bodyData.length
      this.selectionChange.emit(this._selectedRows)
      
      this.dataSource.selectionCallback.callback({type: 'single', data})
      }
    }
    else {
      // select or deSelect a specific row
      if (data.state == 'checked') this._selectedRows.push(data.row)
      else {
        let row: any = this._selectedRows.find((r: iTableRow) => r.id == data.row.id)
        let idx = this._selectedRows.indexOf(row)
        this._selectedRows.splice(idx, 1)
      }
      // set selection state and emit the selectionChange event
      this.isAllSelected = this._selectedRows.length == this.dataSource.bodyData.length
      this.selectionChange.emit(this._selectedRows)
    }
  }

  isRowSelected(row: iTableRow): boolean {
    return this._selectedRows.includes(row)
  }

  getHeaderSelectionState(): '' | 'checked' | 'mid' {
    // returns header checkbox state based on selected rows
    return this._selectedRows.length && !this.isAllSelected 
      ? 'mid' 
      : this._selectedRows.length && this.isAllSelected ? 'checked'
      : ''
  };

  onSortChange(data: any) {
    this.onSort.emit(data)
  }
}
