import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iTabBase } from './tab.interface';
import { TabsAnimations } from './tabs.animations';

@Component({
	selector: 'sr-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
	animations: [TabsAnimations.slideFillX]
})
export class TabsComponent {
	/* @ Tabs data ( array of {title, value} ) @ */
	@Input('data') tabs!: iTabBase[];
	
	/* @ To switch between appearances [ normal / fitted ] @ */
	@Input('stretch') isStretchy?: boolean;
	
	/* @ To set a selected tab by default ( give here the value of the tab object ) @ */
	@Input('value') selectedTab?: iTabBase;
	
	/* @ Fire an event upon tab selection with the whole selected tab object {title, value} @ */
	@Output() onSelect = new EventEmitter<iTabBase>();


	// switch between tabs and emit the event
	selectTab(tab: iTabBase): void {
		this.selectedTab = tab.value;
		this.onSelect.emit(tab);
	}

	// return whether the given tab is active (selected) or not
	isActive(tab: iTabBase): boolean {
		return tab.value === this.selectedTab;
	}
}
