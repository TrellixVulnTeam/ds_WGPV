export const tableData ={
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

export const cardTableData = {
  bodyData: [
    {
      id: 1,
      rowData: [
        {key: 'name', index: 1, img: 'https://ridleys.sirv.com/Images/TRimages/0/05111.jpg?h=1000'},
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
        {key: 'name', index: 2, img: 'https://ridleys.sirv.com/Images/TRimages/0/05111.jpg?h=1000'},
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