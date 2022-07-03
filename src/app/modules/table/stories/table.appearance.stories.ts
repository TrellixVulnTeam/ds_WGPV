import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { TableCellComponent } from '../components/table-cell/table-cell.component';
import { TableRowComponent } from '../components/table-row/table-row.component';
import { TableComponent } from '../components/table/table.component';
import { TableModule } from '../table.module';
import { cardTableData, tableData } from './fakeDataForStories';

export default {
	title: 'Layout/Table/Appearance',
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

export const ListView = Template.bind({})
ListView.args = {
  dataSource: tableData
}

export const CardView = Template.bind({})
CardView.args = {
  dataSource: cardTableData,
  cardView: true
}