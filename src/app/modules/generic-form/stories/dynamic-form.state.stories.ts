import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DynamicFormComponent } from '../component/dynamic-form/dynamic-form.component';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../input/input.module';
import { DropdownModule } from '../../dropdown/dropdown.module';
import { DynamicFormControlComponent } from '../component/dynamic-form-control/dynamic-form-control.component';
import { ButtonModule } from '../../button/button.module';

export default {
	title: 'Layout/Forms/Appearance',
	component: DynamicFormComponent,
	decorators: [
		moduleMetadata({
			declarations: [DynamicFormComponent, DynamicFormControlComponent],
			imports: [CommonModule, FormsModule, ReactiveFormsModule, InputModule, DropdownModule, ButtonModule]
		})
	],
	argTypes: {
		controls: [{ control: 'object' }],
		submitBtn: {}
	}
} as Meta;

const actionsData = {
	onSubmitClicked: action('onSubmitClicked')
};
const formControls = [
	{ key: 'name', controlType: 'textbox', appearance: 'default', required: true ,value:'test'}
]
const Template: Story<any> = (args: any) => ({
	props: {
		...args,
		onSubmitClicked: actionsData.onSubmitClicked
	}
});

export const Default = Template.bind({});
Default.args = {
	controls: formControls,
	submitBtn: { appearance: 'primary', label: 'Save Changes', loading: false }
};