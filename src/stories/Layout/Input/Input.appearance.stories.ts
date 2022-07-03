import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { InputComponent } from '../../../app/modules/input/input.component';

export default {
	title: 'Layout/Input/Appearance',
	component: InputComponent,
	decorators: [
		moduleMetadata({
			declarations: [InputComponent]
		})
	],
	argTypes: {
		appearance: {
			control: {
				type: 'select',
				options: [
					'default',
					'prefix',
					'suffix',
					'icon',
				]
			}
		},
		size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } }
	}
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
	props: args
});

export const Default = Template.bind({});
Default.args = {
	appearance : 'default',
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
	appearance : 'icon',
	iconClass:"si-check",
	iconPosition:"trailing",
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
	appearance : 'icon',
	iconClass:"si-check",
	iconPosition:"leading",
};

export const Prefix = Template.bind({});
Prefix.args = {
	appearance : 'prefix',
	txtWithInput : "SAR",

};

export const Suffix = Template.bind({});
Suffix.args = {
	appearance : 'suffix',
	txtWithInput : "sar",

};

export const Stepper = Template.bind({});
Stepper.args = {
	appearance : 'default',
	type : 'number',
	placeHolder : "0"
};

export const Label = Template.bind({});
Label.args = {
	appearance : 'default',
	optional: true,
	label : "Label"
};


export const Hint = Template.bind({});
Hint.args = {
	appearance : 'default',
	hintText: "We’ll use this address if we need to contact you about your account now.",
	hintIcon: "si-info",
};
