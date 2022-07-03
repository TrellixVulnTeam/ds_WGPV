import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControlBase } from '../../model/control-base.interface';


@Component({
  selector: 'sr-dynamic-form-control',
  styleUrls: ['./dynamic-form-control.component.scss'],
  templateUrl: './dynamic-form-control.component.html'
})
export class DynamicFormControlComponent {
  @Input() control!: IControlBase;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }
}