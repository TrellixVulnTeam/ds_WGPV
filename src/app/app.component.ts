import { Component, ComponentFactoryResolver } from '@angular/core';
import { EditableTextComponent } from './editable-text/editable-text.component';
import { ButtonComponent } from './modules/button/component/button.component';
import { iTableData, iTableRow } from './modules/table/models/table.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private resolver: ComponentFactoryResolver) {}

  title = 'Sary-DS';
  formControls = [
    { key: 'name', id: 'name', controlType: 'textbox', type: 'text', appearance: 'default', value: 'TExtBox input', }
  ]
  submitForm(event: any) { // for test only
    console.log(event);
  }

  tableData: iTableData = {
    selectionCallback: {
      override: false,
      callback: (data: {type: 'bulk' | 'single', data: any}) => {
        if (data.type == 'bulk') console.log('Selection: "bulk", state: ', data)
        else console.log('Selection: single, data: ', data)
      }
    },
    headerData: {
      id: 0,
      rowData: [
        {key: 'name', title: 'Full Name', sort: true},
        {key: 'email', title: 'Email', tooltip: 'this is a unique email of a unique person'},
        {key: 'phone', title: 'Phone Number'},
        {key: 'age', title: 'Age', sort: true},
        {key: '', title: ''}
      ]
    },
    bodyData: [
      {
        id: 1,
        rowData: [
          {key: 'name', title: 'Amr Bendary'},
          {key: 'email', title: 'amr.bendary.business@gmail.com'},
          {key: 'phone', title: '+20 1010628052'},
          {key: 'age', title: '25'},
          {key: 'extra', title: 'an extra cell that has no header'}
        ]
      },{
        id: 2,
        rowData: [
          {key: 'name', title: 'B title', img: 'https://miro.medium.com/max/1400/1*cTVwa6z7fxIQu3kmg5Q0TQ.png'},
          {key: 'email', title: 'fake Email', caption: 'a caption about email'},
          {key: 'phone', title: 'fake Phone Number', caption: 'another caption here'},
          {key: 'age', title: 'fake Age'},
          {key: 'extra', title: 'an extra cell that has no header'}
        ]
      },{
        id: 3,
        rowData: [
          {key: 'name', custom: {
            component: this.resolver.resolveComponentFactory(ButtonComponent),
            handler: (instance: ButtonComponent) => {
              instance.label = 'Custom component with custom styles'
              instance.size = 'sm'
            },
            containerStyles: {
              'background': 'red',
              'padding': '20px'
            }
          }},
          {key: 'email', custom: {
            component: this.resolver.resolveComponentFactory(EditableTextComponent),
            handler: (instance: EditableTextComponent) => {
              instance.txt = 'Click edit to modify'
            }
          }},
          {key: 'phone', title: 'fake Phone Number'},
          {key: 'age', title: 'fake Age'},
          {key: 'extra', html: '<button>here is a button</button>'}
        ]
      },{
        id: 4,
        rowData: [
          {key: 'name', html: '<button>Custom HTML</button>', title: 'd'},
          {key: 'email', html: `<input type="text"/>`},
          {key: 'phone', title: 'fake Phone Number'},
          {key: 'age', title: 'fake Age'},
          {key: 'extra', title: 'an extra cell that has no header'}
        ]
      },{
        id: 5,
        rowData: [
          {key: 'name', title: 'عربي'},
          {key: 'email', title: 'ومن يهب صعود الجبال يعش أبد الدهر بين الحفر'},
          {key: 'phone', title: 'fake Phone Number'},
          {key: 'age', title: 'fake Age'},
          {key: 'extra', title: 'an extra cell that has no header'}
        ]
      }
    ]
  }

  beData = {
    "num_pages": 1,
    "current_page": 1,
    "count": 1,
    "result": [
        {
            "package": {
                "name": "Fanta - Orange",
                "sku": "NOS-NOS-OG-00300ML-001",
                "image": "https://image-host/image",
                "consumable_display": "6 pieces 320 ml"
            },
            "requested_quantity": 5,
            "pickup_date": "2022-06-10",
            "item_cost": 10,
            "purchase_requisition_package_ids": [
                12,
                22,
                43
            ],
            "current_stock": 90
        }
    ],
    "status": true
}

newTableData: iTableData = {
  selectionCallback: {
    override: true,
    callback: (data: {type: 'bulk' | 'single', data: any}) => {
      if (data.type == 'bulk') console.log('Selection: "bulk", state: ', data)
      else console.log('Selection: single, data: ', data)
    }
  },
  headerData: {
    id: 0,
    rowData: [
      {key: 'name', title: 'Product Name', sort: true},
      {key: 'pack', title: 'Package'},
      {key: 'issue-date', title: 'Issue Date'},
      {key: 'pick-date', title: 'Pickup Date'},
      {key: 'quantity', title: 'Quantity'},
      {key: 'price', title: 'Item Price', tooltip: 'Here\'s the price of this item', sort: true},
    ]
  },
  bodyData: [
    {
      id: 1,
      rowData: [
        {key: 'fakeUniqueKey', title: 'Oreo Dark Chocolate', caption: 'SKU: 234234234', img: 'https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw907b0099/products/L1365118/large/L1365118.JPG'},
        {key: 'fakeUniqueKey', title: '6 pieces 100GM'},
        {key: 'fakeUniqueKey', title: 'May 8, 2022'},
        {key: 'fakeUniqueKey', title: 'May 9, 2022'},
        {key: 'fakeUniqueKey', title: '300'},
        {key: 'fakeUniqueKey', title: '3 SAR'},
      ]
    },{
      id: 2,
      rowData: [
        {key: 'fakeUniqueKey', title: 'Fanta Orange', caption: 'SKU: 234234234', img: 'https://ridleys.sirv.com/Images/TRimages/0/05111.jpg?h=1000'},
        {key: 'fakeUniqueKey', title: '12 pieces 350 ML'},
        {key: 'fakeUniqueKey', title: 'May 8, 2022'},
        {key: 'fakeUniqueKey', title: 'May 9, 2022'},
        {key: 'fakeUniqueKey', title: '4'},
        {key: 'fakeUniqueKey', title: '80 SAR'},
      ]
    },{
      id: 3,
      rowData: [
        {key: 'fakeUniqueKey', title: 'Oreo Dark Chocolate', caption: 'SKU: 234234234', img: 'https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw907b0099/products/L1365118/large/L1365118.JPG'},
        {key: 'fakeUniqueKey', title: '6 pieces 100GM'},
        {key: 'fakeUniqueKey', title: 'May 8, 2022'},
        {key: 'fakeUniqueKey', title: 'May 9, 2022'},
        {key: 'fakeUniqueKey', title: '300'},
        {key: 'fakeUniqueKey', title: '3 SAR'},
      ]
    },{
      id: 4,
      rowData: [
        {key: 'fakeUniqueKey', title: 'Fanta Orange', caption: 'SKU: 234234234', img: 'https://ridleys.sirv.com/Images/TRimages/0/05111.jpg?h=1000'},
        {key: 'fakeUniqueKey', title: '12 pieces 350 ML'},
        {key: 'fakeUniqueKey', title: 'May 8, 2022'},
        {key: 'fakeUniqueKey', title: 'May 9, 2022'},
        {key: 'fakeUniqueKey', title: '4'},
        {key: 'fakeUniqueKey', title: '80 SAR'},
      ]
    }
  ]
}

cardTableData: iTableData = {
  bodyData: [
    {
      id: 1,
      rowData: [
        {key: 'name', index: 1, title: 'here is image', img: 'https://ridleys.sirv.com/Images/TRimages/0/05111.jpg?h=1000'},
        {key: 'id', title: '#64536', caption: 'Order ID'},
        {key: 'issue-date', title: 'May 8, 2022', caption: 'Issue Date'},
        {key: 'pick-date', title: 'May 9, 2022', caption: 'Pickup Date'},
        {key: 'price', title: '2000 SAR', caption: 'Total Price'},
        {key: 'skus', title: '234', caption: 'Total SKUs'},
      ]
    },
    {
      id: 2,
      rowData: [
        {key: 'name', index: 2, title: 'here is custom', html: '<button>Here\'s a custom button</button>'},
        {key: 'id', title: '#64536', caption: 'Order ID'},
        {key: 'issue-date', title: 'May 8, 2022', caption: 'Issue Date'},
        {key: 'pick-date', title: 'May 9, 2022', caption: 'Pickup Date'},
        {key: 'price', title: '2000 SAR', caption: 'Total Price'},
        {key: 'skus', title: '234', caption: 'Total SKUs'},
      ]
    },
    {
      id: 3,
      rowData: [
        {key: 'name', img: 'https://ridleys.sirv.com/Images/TRimages/0/05111.jpg?h=1000'},
        {key: 'id', title: '#64536', caption: 'Order ID'},
        {key: 'issue-date', index: 3, title: 'May 8, 2022', caption: 'Issue Date'},
        {key: 'pick-date', title: 'May 9, 2022', caption: 'Pickup Date'},
        {key: 'price', title: '2000 SAR', caption: 'Total Price'},
        {key: 'skus', title: '234', caption: 'Total SKUs'},
      ]
    },
    {
      id: 4,
      rowData: [
        {key: 'name', img: 'https://ridleys.sirv.com/Images/TRimages/0/05111.jpg?h=1000'},
        {key: 'id', title: '#64536', caption: 'Order ID'},
        {key: 'issue-date', title: 'May 8, 2022', caption: 'Issue Date'},
        {key: 'pick-date', title: 'May 9, 2022', caption: 'Pickup Date'},
        {key: 'price', title: '2000 SAR', caption: 'Total Price'},
        {key: 'skus', title: '234', caption: 'Total SKUs'},
      ]
    }
  ]
}

  onTableSelection(selectedRows: iTableRow[]): void {
    console.log('Finally: ', selectedRows)
  }

  onTableSort(data: any) {
    console.log('Hello from appComponent', data)
  }

  findEm(bodyData: any, column: string): any {
   bodyData.find((row: iTableRow) => row)
  }
}
