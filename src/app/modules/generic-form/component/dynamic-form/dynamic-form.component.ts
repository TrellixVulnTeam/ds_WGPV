import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControlBase } from '../../model/control-base.interface';
import { FormControlService } from '../../service/form-control.service';

@Component({
  selector: 'sr-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  @Input() submitBtn: any = { appearance: 'primary', label: 'Save Changes', loading: false, size: 'md' };
  @Input() controls: IControlBase[] | null = [];
  @Output() onSubmitClicked = new EventEmitter();

  constructor(private qcs: FormControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.controls as IControlBase[]);
  }

  onSubmit() {
    this.onSubmitClicked.emit(this.form.value)
  }
}
