import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from '../component/button.component';

export default {
	title: 'Layout/Button/Appearance',
	component: ButtonComponent,
	decorators: [
		moduleMetadata({
			declarations: [ButtonComponent]
		})
	],
	argTypes: {
		backgroundColor: {
			control: 'color'
		},
	}
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
	props: args
});

export const Default = Template.bind({});
Default.args = {
	label: 'Default / feel free to play with controls down below'
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary',
	appearance: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Secondary',
	appearance: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	label: 'Tertiary',
	appearance: 'tertiary'
};

export const Destructive = Template.bind({});
Destructive.args = {
	label: 'Destructive',
	appearance: 'destructive'
};

export const Text = Template.bind({});
Text.args = {
	label: 'Text / Link',
	appearance: 'text'
};

export const Icon = Template.bind({});
Icon.args = {
	iconClass: 'si-burger',
	appearance: 'icon'
};

export const Disabled = Template.bind({});
Disabled.args = {
	iconClass: 'si-error',
	label: 'This button is disabled',
	disabled: true
};
