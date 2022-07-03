import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
