import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { InputComponent } from '../../../app/modules/input/input.component';

export default {
	title: 'Layout/Input/State',
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

const Template: Story<InputComponent> = (args: InputComponent) => ({
	props: args
});

export const Default = Template.bind({});
Default.args = {
	appearance : 'default',
};


export const Placeholder = Template.bind({});
Placeholder.args = {
	appearance : 'default',
	placeHolder : "Your placeholder text here"
};

export const Focus = Template.bind({});
Focus.args = {
	inputFocusClass : true,
};

export const Error = Template.bind({});
Error.args = {
	appearance : 'default',
	error: true,
	hintText: "Name Is Required",
	hintIcon: "si-info",
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled :true
};

