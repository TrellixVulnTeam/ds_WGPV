export interface iTableData {
  headerData?: iTableRow;
  bodyData: iTableRow[];
  enableSelection?: boolean;
  selectionCallback?: SelectionCallback;
}

export interface iTableRow {
  rowData: iTableCell[];
  id: any;
  // add additional data incase you wanna send them back upon selection
  // example: send full package object, so when selecting this row, you can send this obj back to parent to process
  // or you can run the custom function above to do some logic
  // you can handle that with the custom callback that's defined in the table data so if you pass the custom callback
  // it will take (data: { state: checkboxState, row: iTableRow }) as a param, so you've full access to the table row object that includes your additional data
  additional?: any;
}

export interface iTableCell {
  // @ custom key [unique per column] ( !! it's recommended to the same KEY to cells in the same column !! ) @ //
  // it's mandatory to differentiate between single cell and another and between columns
  // (ex: sort by name, key: 'name')
  key: string; 
  index?: number; // can be used for ordering cells in the row
  title?: string;
  caption?: string;
  img?: string;
  imgOnly?: boolean; // add different styles to cell if it's an image only cell
  icon?: string;
  tooltip?: string;
  sort?: boolean; // to enable sorting in this cell's column [ use only on table headerData (header cells only) ]
  cellData?: any; // give here any custom data like if cell contains a dropdown, provide here dropdownData ...etc
  html?: string; // give HTML code to render inside the table cell ( nothing else will be rendered in this case (e.g: no title, no description) )
  
  /* 
    * give custom component of type [ ComponentFactory<your_component> ] to render in the table cell
    * also give a function that takes component instance as input and modifies the inputs of it OR simply you can do this from the component itself
    * to get everything working this component should have no outputs as you can't communicate with them
=>  * e.g: a button and an input and a picture, simply put them all in a component that handles their outputs internally in it's logic
    * and that component takes inputs of it's children as an input and populate them with via that function that you send here
    * FYI: make sure that the component's width is max-content to fit well in the table cell view 
    * NOTICE: this approach takes what's inside the component and puts it into the customHTML placeholder element
=>  * so if you gave some styles to your component's HOST element, then it'll be lost 
=>  * e.g: <my-comp> <h1></h1> <p></p> </my-comp> => <div id="customHTML"> <h1></h1> <p></p> </div>
=>  * but the internal logic of your component will still be working so keep that in mind, and a small fix is to follow line 4 above
  */
  custom?: {
    component: any;
    handler?: Function;
    // you can pass styles in [ngStyle] format to attach to the customHTML element to fix issue the last 3 lines in the comment above
    containerStyles?: any;
  }; 
}

interface SelectionCallback {
  override?: boolean;
  callback: Function;
}