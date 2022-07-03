import { Component, Input } from '@angular/core';

@Component({
  selector: 'sr-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent  {

  @Input() txt: string = '';

  isEditing!: boolean;

}
