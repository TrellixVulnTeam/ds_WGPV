import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IControlBase } from '../generic-form/model/control-base.interface';

@Component({
  selector: 'sr-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  // these types are givin to shut the tslint up!
  private states: ['', 'mid', 'checked'] = ['', 'mid', 'checked'];
  
  controlType: string = 'checkbox';
  
  @Input() state: '' | 'checked' | 'mid' = '';

  @Input() label: string = '';

  @Input() description?: string;

  // TODO: rename this to parentControl
  // as it allows u to control the state from parent only (not by click)
  @Input() disableControl?: boolean;

  @Input() enableIntermediate?: boolean;

  @Input() disabled?: boolean;

  @Output() changed = new EventEmitter<'' | 'checked' | 'mid'>();

  constructor() {
  }

  onChange(): void {
    if (!this.disableControl) {
      // switch between states in order
      let i = this.states.indexOf(this.state);
      if (i == this.states.length - 1) {
        this.state = this.states[0];
      } else {
        // if intermediate is not enabled then switch between 'checked' and '' only
        if (this.enableIntermediate) this.state = this.states[i + 1];
        else this.state = this.states[this.states.length - 1];
      }

    }
    // emit change
    this.changed.emit(this.state);
  }
}
