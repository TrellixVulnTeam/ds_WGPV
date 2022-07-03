import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RadioButtonModule } from '../../radio-button/radio-button.module';
import { DropdownComponent } from '../component/dropdown.component';
import { SearchPipe } from '../search.pipe';

export default {
  title: 'Layout/Dropdown/Single Select',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [DropdownComponent, SearchPipe],
      imports: [FormsModule, ReactiveFormsModule, RadioButtonModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DropdownComponent),
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

const dropdownOptions = [
  { title: 'Arabic', value: 1 },
  { title: 'English', value: 2 },
  { title: 'Spanish', value: 3 },
  { title: 'French', value: 4 },
  { title: 'Something Else', value: 5 },
];

export const Default: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
  },
});

export const FixedPlaceholder: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    fixedPlaceholder: true,
    placeholder: 'Placeholder wont change upon selection'
  }
})

const dropdownOptionsWithIcons: any = [
  { title: 'Arabic', value: 1, iconClass: 'si-check' },
  { title: 'English', value: 2, iconClass: 'si-check' },
  { title: 'Spanish', value: 3, iconClass: 'si-check' },
  { title: 'French', value: 4, iconClass: 'si-check' },
  { title: 'Something Else', value: 5, iconClass: 'si-check' },
]

export const OptionsWithIcons: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptionsWithIcons,
    value: dropdownOptionsWithIcons[2]
  }
})
OptionsWithIcons.storyName = 'Options with trailing icons'

export const NoIndicators: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptionsWithIcons,
    value: dropdownOptionsWithIcons[0],
    disableSelectedIndicator: true
  }
})
NoIndicators.storyName = 'No [ checkbox / radio_button ]'

export const WithDescription: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    description: "Caution, this is a description, please take care of yourself."
  }
})

export const Disabled: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    isDisabled: true,
    description: "This is disabled, in case you didn't notice already."
  },
  template: '<sr-dropdown [data]="data" [disabled]="isDisabled" [description]="description"></sr-dropdown>'
})

export const Error: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    isError: true,
    description: "Here's an error, watchout"
  },
  template: '<sr-dropdown [data]="data" [error]="isError" [description]="description"></sr-dropdown>'
})