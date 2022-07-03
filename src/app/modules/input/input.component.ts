import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IControlBase } from '../generic-form/model/control-base.interface';

@Component({
	selector: 'sr-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	@Input() form: any;
	@Input() key: any;
	// @ Input Focus @ //
	@Input() inputFocusClass = false;
	@Input() inputControl?: IControlBase;
	// Input label //
	@Input() label!: string;
	// @ Input Style @ //
	@Input() appearance:
		| 'default'
		| 'prefix'
		| 'suffix'
		| 'icon' = 'default';

	// @ Input icon class [ font-icon ] @ //
	@Input() iconClass?: string;

	// @ Input optional OR required @ //
	@Input() optional?: boolean = false;

	// @ Input Hint Text @ //
	@Input() hintText?: string;

	// @ Input Hint Icon @ //
	@Input() hintIcon?: string;

	// @ Input icon Position (ledt or right) @ //
	@Input() iconPosition?: string;

	// @ Input Type (text , Number etc .. ) @ //
	controlType: string = 'textbox';
	@Input() type = 'text';
	// @ Input text for prefix and suffix like (SAR) @ //
	@Input() txtWithInput?: string;

	// @ Input error @ //
	@Input() error?: boolean;

	// @ Input disabled @ //
	@Input() disabled?: boolean = false;

	// @ Input Placeholder @ //
	@Input() placeHolder?: string = 'placeholder';

	// @ Input Value @ //
	@Output() value = new EventEmitter();

	inputValue(e: any) {
		this.value.emit(e.target.value)
	}

}
