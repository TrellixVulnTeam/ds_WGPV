import { Pipe, PipeTransform } from '@angular/core';
import { IDropdownOption } from './dropdown-option.model';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	transform(value: IDropdownOption[], searchText: string): any {
		if (!value) return null;
		if (!searchText) return value;

		searchText = searchText.toLowerCase();

		return value.filter((option) => {
			return option.title.toLowerCase().includes(searchText);
		});
	}
}
