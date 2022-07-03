import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { TableComponent } from '../components/table/table.component';
import { TableModule } from '../table.module';
import { cardTableData, tableData } from './fakeDataForStories';

export default {
	title: 'Layout/Table/State',
	component: TableComponent,
	decorators: [
		moduleMetadata({
      imports: [CheckboxModule, TableModule]
		})
	],
	argTypes: {
	}
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
	props: args
});

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  dataSource: tableData,
  enableSelection: true
}

export const MultiSelectCardView = Template.bind({})
MultiSelectCardView.args = {
  dataSource: cardTableData,
  enableSelection: true,
  cardView: true
}