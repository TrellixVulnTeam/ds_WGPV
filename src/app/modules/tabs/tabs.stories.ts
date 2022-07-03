import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

export default {
  title: 'Layout/Tabs/States',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent],
      imports: [BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    data: {control: 'array'},
    stretch: {control: 'boolean'},
    value: {control: 'object'}
  }
} as Meta;

const tabsData = [
  { title: 'First tab', value: 1 },
  { title: 'Second tab', value: 2 },
  { title: 'عربي تاب', value: 3 },
  { title: 'Fourth tab', value: 4 },
]

const Template: Story<any> = (args: any) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  data: tabsData
}

export const Fitted = Template.bind({});
Fitted.storyName = 'Fitted / Stretched'
Fitted.args = {
  data: tabsData,
  stretch: true
};

export const InitializedWithValue = Template.bind({});
InitializedWithValue.args = {
  data: tabsData,
  value: tabsData[2].value
}