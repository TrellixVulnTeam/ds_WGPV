import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DropdownModule } from '../../dropdown/dropdown.module';
import { ButtonComponent } from './../component/button.component';

export default {
	title: 'Layout/Button/State',
	component: ButtonComponent,
	decorators: [
		moduleMetadata({
			declarations: [ButtonComponent],
			imports: [DropdownModule]
		})
	],
	argTypes: {
		appearance: {
			control: {
				type: 'select',
				options: [
					'primary',
					'secondary',
					'tertiary',
					'destructive',
					'text',
					'icon'
				]
			}
		},
		size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } }
	}
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
	props: args
});

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
	label: 'Leading Icon',
	appearance: 'primary',
	iconClass: 'si-check',
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
	label: 'Trailing Icon',
	appearance: 'primary',
	iconClass: 'si-check',
	trailingIcon: true,
};

export const Loading = Template.bind({});
Loading.args = {
	label: 'Loading...',
	appearance: 'primary',
	loading: true
};

// used type any here to give an extra argument (groupData) that does not exist in ButtonComponent
export const Grouped: Story<any> = (args: any) => ({
	props: args,
	template: `
		<div class="btn-group">
			<ng-container *ngFor="let btn of groupData; let first = first;">
				<sr-button 
					[grouped]="grouped" 
					[label]="btn.label" 
					[size]="size"
					[iconClass]="btn.iconClass || ''" 
					[loading]="btn.loading"
					[trailingIcon]="btn.trailingIcon"
					[orderInGroup]="first ? 'first' : ''">
				</sr-button>
			</ng-container>
			<sr-dropdown
				[data]="dropdownData" [grouped]="grouped" [disableSelectedIndicator]="true"
				placeholder="Dropdown" [fixedPlaceholder]="true" sizeInGroup="sm" orderInGroup="last">
			</sr-dropdown>
		</div>
		<br>
		<p class="txt-sm">We've used Dropdown component here as it has a grouped/segmented state, please check the Dropdown component</p>
		<p class="txt-caption">Note: the button group is not meant to be for mobile view, so make sure you use it on desktop/wide view</p>
	`
});
Grouped.args = {
	grouped: true,
	size: 'sm',
	// this groupData is not a native property of ButtonComponent
	// it can be defined in the parent component and used to loop over it
	// or you can simply write each button alone without ngFor, whatever u prefer
	// it's used here just for demo
	groupData: [
		{
			label: 'Button default'
		},
		{
			label: 'Loading with icon',
			iconClass: 'si-check',
			loading: true,
		},
		{
			label: 'Trailing icon',
			iconClass: 'si-check',
			trailingIcon: true,
			loading: false
		},
		{
			label: 'Loading with trailing icon',
			iconClass: 'si-check',
			trailingIcon: true,
			loading: true
		},
		{
			label: 'الخط العربي',
			loading: true
		},
		{
			label: 'icon only',
			iconOnly: true,
			iconClass: 'si-check',
			loading: false
		},
	],
	dropdownData: [
		{title: 'option 1', value: 1},
		{title: 'Long text here', value: 2},
		{title: 'Longer text here bla bla bla bla bla bla bla bla bla bla bla bla bla bla', value: 3},
		{title: 'خط عربي أصيل هنا، إستمتع بالقراءة', value: 4}
	]
};