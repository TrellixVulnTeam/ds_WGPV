import {
  AfterViewInit,
  ApplicationRef,
  CompilerFactory,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { iTableCell } from '../../models/table.interfaces';

@Component({
  selector: 'sr-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
})
export class TableCellComponent implements AfterViewInit {
  _data!: iTableCell;

  customComponent!: ComponentFactory<any>;

  @Input() set data(value: iTableCell) {
    this._data = value;
    if (value.custom) this.customComponent = value.custom.component;
  }

  @Input() checkbox?: boolean;

  @Input() headerCheckbox?: boolean;

  @Input() cardView?: boolean;

  @Input() selectionState: '' | 'checked' | 'mid' = '';

  @Input() sortState: boolean | null = null;

  @Output() onCheckboxChange = new EventEmitter<'' | 'checked' | 'mid'>();

  @Output() onSort = new EventEmitter();

  constructor(
    private eRef: ElementRef,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngAfterViewInit(): void {
    // append custom HTML after view init
    if (this._data?.html) {
      let host = this.eRef.nativeElement;
      host.insertAdjacentHTML('beforeend', this._data?.html);
    }

    if (this._data?.custom) {
      // inject custom component
      let placeholder = this.eRef.nativeElement.querySelector('#customHTML');
      let componentRef: ComponentRef<any> = this.customComponent.create(
        this.injector,
        [],
        placeholder
      );
      if (this._data.custom?.handler)
        this._data.custom.handler(componentRef.instance);
      this.appRef.attachView(componentRef.hostView);
    }
  }

  onCheckboxClick(state: '' | 'checked' | 'mid') {
    this.changeSelectionState(state);
    this.onCheckboxChange.emit(this.selectionState);
  }

  changeSelectionState(state: '' | 'checked' | 'mid') {
    if (!this.headerCheckbox) {
      this.selectionState = state == '' ? 'checked' : '';
    }
  }

  changeSortingState() {
    if (this._data.sort) {
      this.sortState =
        this.sortState == true ? false : this.sortState == false ? null : true;
      let data = {
        column: this._data.key,
        state: this.sortState,
      };
      this.onSort.emit(data);
    }
  }
}
