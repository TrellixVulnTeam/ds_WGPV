import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { TagModule } from '../../tag/tag.module';
import { DropdownComponent } from '../component/dropdown.component';
import { SearchPipe } from '../search.pipe';

// const argTypes = {
//   label: {
//     name: 'multiSelect',
//     type: { name: 'boolean', required: false },
//     defaultValue: false,
//     description: 'Enable multi-select feature',
//     table: {
//       type: { summary: 'boolean' },
//       defaultValue: { summary: false },
//     },
//     control: {
//       type: 'boolean'
//     }
//   }
// }

export default {
  title: 'Layout/Dropdown/Multi Select',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [DropdownComponent, SearchPipe],
      imports: [FormsModule, ReactiveFormsModule, TagModule, CheckboxModule, BrowserAnimationsModule],
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
  { title: 'خط عربي', value: 5 },
];

export const Default: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    multiSelect: true,
  },
});

export const FixedPlaceholder: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    multiSelect: true,
    fixedPlaceholder: true,
    placeholder: 'Placeholder wont change upon selection',
  },
});

const dropdownOptionsWithIcons: any = [
  { title: 'Arabic', value: 1, iconClass: 'si-check' },
  { title: 'English', value: 2, iconClass: 'si-check' },
  { title: 'Spanish', value: 3, iconClass: 'si-check' },
  { title: 'French', value: 4, iconClass: 'si-check' },
  { title: 'خط عربي أصيل', value: 5, iconClass: 'si-check' },
];

export const OptionsWithIcons: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptionsWithIcons,
    value: [dropdownOptionsWithIcons[0], dropdownOptionsWithIcons[1]],
    multiSelect: true,
  },
});
OptionsWithIcons.storyName = 'Options with trailing icons';

export const NoIndicators: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptionsWithIcons,
    value: [dropdownOptionsWithIcons[0], dropdownOptionsWithIcons[1]],
    multiSelect: true,
    disableSelectedIndicator: true,
  },
});
NoIndicators.storyName = 'No [ checkbox / radio_button ]';

export const WithMultilineDescription: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    description: `
      Caution, this is a description, bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla
    `,
  },
});

export const withLabel: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    description: 'with label',
    label: 'this is a label'
  }
})

export const optional: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    description: 'this is optional',
    optional: 'Optional'
  }
})

export const optionalWithLabel: Story<any> = (args: any) => ({
  props: {
    data: dropdownOptions,
    description: 'this is optional with label',
    label: 'Select items',
    optional: 'إختياري'
  }
})

