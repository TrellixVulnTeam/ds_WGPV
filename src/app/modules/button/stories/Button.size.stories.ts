import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from '../component/button.component';

export default {
	title: 'Layout/Button/Size',
	component: ButtonComponent,
	decorators: [
		moduleMetadata({
			declarations: [ButtonComponent]
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

export const Small = Template.bind({});
Small.args = {
	label: 'Small Button',
	appearance: 'primary',
	size: 'sm'
};

export const Medium = Template.bind({});
Medium.args = {
	label: 'Medium Button',
	appearance: 'primary',
	size: 'md'
};

export const Large = Template.bind({});
Large.args = {
	label: 'Large Button Long Text',
	appearance: 'primary',
	size: 'lg'
};
