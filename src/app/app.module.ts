import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from './modules/button/button.module';
import { CheckboxModule } from './modules/checkbox/checkbox.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { DynamicFormModule } from './modules/generic-form/dynamic-form.module';
import { RadioButtonModule } from './modules/radio-button/radio-button.module';
import { TableModule } from './modules/table/table.module';
import { TabsModule } from './modules/tabs/tabs.module';
import { TagModule } from './modules/tag/tag.module';
import { EditableTextComponent } from './editable-text/editable-text.component';

@NgModule({
  declarations: [
    AppComponent,
    EditableTextComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    TagModule,
    RadioButtonModule,
    TabsModule,
    DynamicFormModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
