import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'sr-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	// @ Button text @ //
	@Input() label!: string;
	@Input() type = 'button';
	// @ Button style @ //
	@Input() appearance:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'destructive'
		| 'text'
		| 'icon' = 'primary';

	@Input() disabled!: boolean;
	// @ Button size @ //
	@Input() size: 'sm' | 'md' | 'lg' = 'md';

	// @ Button icon class [ font-icon ] @ //
	@Input() iconClass?: string;

	// @ Change icon position to suffix [ prefix by default ] @ //
	@Input() trailingIcon?: boolean;

	// @ Loading indicator @ //
	@Input() loading?: boolean;

	// @ Display multiple buttons ( button group ) @ //
	@Input() grouped?: boolean;

	// @ Add a class to identify the first and last buttons in group to adjust styles @ //
	@Input() orderInGroup?: 'first' | 'last';

	// @ Emit an event on button clicked @ //
	@Output() clicked = new EventEmitter()
	onClick(): void {
		this.clicked.emit()
	}
}
