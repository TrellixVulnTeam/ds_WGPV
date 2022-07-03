import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { FormControlService } from './service/form-control.service';
import { DynamicFormControlComponent } from './component/dynamic-form-control/dynamic-form-control.component';
import { InputModule } from '../input/input.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [FormControlService],
  exports: [
    DynamicFormComponent,
    DynamicFormControlComponent]
})
export class DynamicFormModule { }
