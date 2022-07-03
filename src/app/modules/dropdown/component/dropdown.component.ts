import {
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	HostListener,
	Input,
	Output,
	ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OnInit } from '@angular/core';
import { IDropdownOption } from './../dropdown-option.model';
import { DropdownAnimations } from './../dropdown.animations';

const VALUE_ACCESSOR_CONFIG = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DropdownComponent),
	multi: true
};

@Component({
	selector: 'sr-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
	providers: [VALUE_ACCESSOR_CONFIG],
	animations: [DropdownAnimations.fade, DropdownAnimations.fadeSlideY]
})
export class DropdownComponent implements ControlValueAccessor, OnInit {
	private _options!: IDropdownOption[];
	/* *** Required *** */
	@Input() key: any;
	@Input() form: any;
	@Input('data') set options(value: IDropdownOption[]) {
		this._options = value;

		if (!this.searchText) this.filteredOptions = value;
		if (!this.throttle) this.isThrottling = false;
	}
	get options(): IDropdownOption[] {
		return this._options;
	}
	/* Optional [ Settings ] */
	@Input() badgesLimit: number = 3;
	@Input('maxListItemsWithoutSearch') maxWithoutSearch: number = 20; // when to enable search
	@Input('paginationThrottle') throttle?: number; // how much time [in milliseconds] to wait before next pagination
	@Input('multiSelect') isMulti?: boolean; // [ single or multi ]-select
	@Input('enableSearch') isSearchEnabled?: boolean; // enable search feature
	@Input('enableSelectAll') isSelectAllEnabled?: boolean; // enable select and deselect all
	@Input('fixedPlaceholder') isPlaceholderFixed?: boolean; // placeholder never changes when selecting options
	@Input('disableSelectedIndicator') isIndicatorDisabled?: boolean; // disable checkbox and radio-btn before each option
	@Input('enableParentSearch') isParentSearchEnabled?: boolean; // to search dynamically using http request from the parent
	/*
	 ↓↓ use a custom css class to modify the styles in your platform ↓↓
	 [ it's recommended to modify this class in the main styles.css file ]
	*/
	@Input('customCssClass') class: string = '';
	/*
	 ↓↓ add a glyph icon before or after (or both) the placeholder ↓↓
	 [ you can use fontAwesome or any other font-icon class
		example: 'fa fa-arrow-down' or 'si-chevron-down' ]
	*/
	@Input('leadingIconClass') leadingIcon?: string;
	@Input('trailingIconClass') trailingIcon?: string;
	/*
		Text inputs, If you want to display custom or translated text ↓↓
		All the text in this component can be passed dynamically using inputs ↓↓
	*/
	@Input() placeholder?: string = 'Select';
	@Input() loadingText?: string = 'Loading ...';
	@Input() selectAllText?: string = 'All';
	@Input() searchPlaceholder?: string = 'Search';
	@Input() defaultOptionText?: string = '(Default)';
	@Input('searchNoResultText') noResultText?: string = 'No results';
	@Input() label?: string;
	@Input() optional?: string;
	@Input() description?: string;
	@Input('error') isError?: boolean;
	@Input() grouped?: boolean;
	@Input() sizeInGroup: '' | 'sm' | 'md' | 'lg' = '';
	// @ Add a class to identify the first and last buttons in group to adjust styles @ //
	@Input() orderInGroup?: 'first' | 'last';

	// Outputs
	@Output() onSelect = new EventEmitter<IDropdownOption>();
	@Output() onDeSelect = new EventEmitter<IDropdownOption>();
	@Output()
	onClose = new EventEmitter<IDropdownOption | IDropdownOption[]>();
	@Output() onScrolled = new EventEmitter<boolean>();
	@Output() onSearch = new EventEmitter<string>();

	value: any = null;
	isDisabled = false;

	filteredOptions!: IDropdownOption[]; // the options that being filtered by search
	isOpen = false; // to toggle dropdown list
	isTouched = false; // to handle on touched only once
	searchText!: string;
	isThrottling!: boolean;

	onChange = (value: any) => { }; // to register value accessor method onChange
	onTouched = () => { }; // to register value accessor method onTouched

	constructor(private eRef: ElementRef) { }

	ngOnInit(): void {
		// init type of value to be able to handle selection
		// if multiSelect value will be an array
		// otherwise will be an object and as no option is selected, will be null
		this.value = this.isMulti ? [] : null;
	}

	@ViewChild('uList') set onListOpen(listEl: any) {
		// when dropdown isOpen, check if its X is outside the viewport (left or right)
		// if true, just reverse the X position (inset-inline-start = unset, inset-inline-end = 0)
		// if you didn't get it, please check the position of .list class
		if (listEl)
			this.whenListPositionIsOutsideViewport(listEl.nativeElement);
	}

	// Value Accessor Methods
	writeValue(value: any): void {
		if (value) this.value = value;
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(onTouched: any): void {
		this.onTouched = onTouched;
	}
	setDisabledState?(isDisabled: boolean): void {
		this.isDisabled = isDisabled;
	}

	handleTouched(): void {
		if (this.isTouched) this.onTouched();
	}

	// Listening to outer clicks
	@HostListener('document:click', ['$event'])
	onMousedownFromOutside(e: any): void {
		const target = e.target;
		const host = this.eRef.nativeElement.querySelector('.host');
		if (!host.contains(target)) {
			if (this.isOpen) {
				e.stopImmediatePropagation();
				e.preventDefault();
				e.stopPropagation();
				this.clearSearch();
				this.isOpen = false;
				this.handleTouched();
				this.onClose.emit(this.value);
			}
		}
	}
	// listening to scroll event for pagination
	@HostListener('scroll', ['$event'])
	onScroll(event: any) {
		event.stopPropagation();
		if (!this.isThrottling && !this.searchText)
			if (this.isScrolledToBottom(event)) {
				this.onScrolled.emit(true);
				this.throttlePagination();
			}
	}

	// Main Methods
	toggleDropdown(): void {
		this.isOpen = !this.isOpen;
		this.isTouched = true;
		if (!this.isOpen) {
			this.onTouched();
			this.clearSearch();
		}
	}

	whenListPositionIsOutsideViewport(el: any): void {
		const offset = el.getBoundingClientRect();
		if (this.isOutsideViewport(offset))
			el.classList.add('position_reverse');
		else el.classList.remove('position_reverse');
	}

	search(): void {
		// parent search enables [backend search using this $event]
		// use value to filter data async and just set data from parent to filtered
		if (this.isParentSearchEnabled) this.onSearch.emit(this.searchText);
	}

	clearSearch(): void {
		this.searchText = '';
		this.search();
	}

	toggleSelectAll(): void {
		this.value = this.isAllSelected ? [] : [...this.options];
		this.onChange(this.value);
		this.handleTouched();
	}

	onOptionSelected(o: IDropdownOption): void {
		if (this.isMulti) this.handleMultiSelect(o);
		else this.handleSingleSelect(o);
		this.onChange(this.value);
		this.handleTouched();
	}

	handleMultiSelect(o: IDropdownOption): void {
		if (this.isSelected(o)) {
			const i = this.getIndex(o);
			this.value.splice(i, 1);
			this.onDeSelect.emit(o);
		} else {
			this.value.push(o);
			this.onSelect.emit(o);
		}
	}

	handleSingleSelect(o: IDropdownOption): void {
		this.value = o;
		this.isOpen = false;
		this.clearSearch();
		this.onSelect.emit(o);
	}

	onBadgeDeselect(e: MouseEvent, o: IDropdownOption): void {
		e.stopPropagation();
		this.onOptionSelected(o);
		this.onDeSelect.emit(o);
		this.handleTouched();
	}

	// Helper Methods
	getIndex(o: IDropdownOption): number {
		const found = this.value.find((opt: any) => opt.value === o.value);
		return this.value.indexOf(found);
	}

	isSelected(o: IDropdownOption): boolean {
		if (this.isMulti)
			return this.value?.some((opt: any) => opt.value === o.value);
		else return o.value === this.value?.value;
	}

	isScrolledToBottom(event: any): boolean {
		const el: HTMLElement = event.target;
		const pos = el.scrollTop + el.offsetHeight;
		const max = el.scrollHeight;
		return pos >= max - 1;
	}

	throttlePagination(): void {
		this.isThrottling = true;
		if (this.throttle)
			setTimeout(() => {
				this.isThrottling = false;
			}, this.throttle);
	}

	isOutsideViewport(offset: any): boolean {
		return (
			offset.left < 0 ||
			offset.right > window.innerWidth ||
			offset.right > document.documentElement.clientWidth
		);
	}

	// Getters
	get isAllSelected(): boolean {
		return this.value?.length == this.options?.length;
	}
	get isSearchable(): boolean | undefined {
		if (this.isParentSearchEnabled) return true;
		else
			return (
				this.isSearchEnabled &&
				this.options?.length > this.maxWithoutSearch
			);
	}
}
