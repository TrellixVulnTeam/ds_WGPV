import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IControlBase } from '../model/control-base.interface';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }
  toFormGroup(controls: IControlBase[]) {
    const group: any = {};

    controls.forEach((control: IControlBase) => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
