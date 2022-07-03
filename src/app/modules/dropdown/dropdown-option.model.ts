
export interface IDropdownOption {
	title: string;
	value: string | number | boolean | any;
	isDisabled?: boolean;
	isDefault?: boolean;
	iconClass?: string;
}