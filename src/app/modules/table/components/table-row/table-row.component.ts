import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { iTableRow } from '../../models/table.interfaces';

@Component({
  selector: 'sr-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() data!: iTableRow;

  @Input() header?: boolean;

  @Input() cardView?: boolean;

  @Input() enableSelection?: boolean;

  @Input() selectionCallback?: any;

  @Input() selectionState?: any = '';

  @Input() isAllSelected?: boolean;

  @Output() onSort = new EventEmitter()

  @Output() selectionChange = new EventEmitter();

  // @ add a class to hostElement to change styles for card view @ //
  @HostBinding('class') get hostClass(): string {
    return this.cardView ? 'card-view' : '';
  }

  onSelectionChange(state: '' | 'checked' | 'mid'): void {
    if (this.header) this.handleHeaderSelectionChange(state);
    else this.handleSelectionChange(state);
  }

  handleHeaderSelectionChange(state: '' | 'checked' | 'mid'): void {
    switch (state) {
      case '':
        this.selectionChange.emit(true);
        break;

      case 'mid':
        this.selectionChange.emit(true);
        break;

      case 'checked':
        this.selectionChange.emit(false);
        break;
    }
  }

  handleSelectionChange(state: '' | 'checked' | 'mid') {
    let data = {
      state,
      row: this.data,
    };
    this.selectionChange.emit(data);
  }

  onSortChange(data: any) {
    this.onSort.emit(data)
  }
}
