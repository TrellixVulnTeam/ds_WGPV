import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { TagModule } from '../tag/tag.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { RadioButtonModule } from '../radio-button/radio-button.module';
import { DropdownComponent } from './component/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    DropdownComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TagModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserAnimationsModule
  ],
  exports: [DropdownComponent, SearchPipe]
})
export class DropdownModule { }
