import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'

})
export class ListComponent  {

  itemDeleted: string = '';
  listItems: string[] =['Item 1','Item 2', 'Item 3'];

  deleteItem(){
    this.itemDeleted = this.listItems.pop() || '';
  }

}
