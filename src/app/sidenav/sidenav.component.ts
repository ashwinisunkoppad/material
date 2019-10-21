import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger} from '@angular/material/menu';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../data.service';
import { User } from './sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  arr: any;
  id: number;
  name: string;
  description: string;


// paginator
   dataSource = new MatTableDataSource<User>();
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  //  context menu
   displayedColumns: string[] = ['id', 'name', 'description'];
   @ViewChild(MatMenuTrigger, {static: true})

  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  onContextMenu(event: MouseEvent, item: User) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.openMenu();
  }


  constructor(private _data:DataService) { }

  ngOnInit() {

   this._data.getAlldesignations().subscribe((data: User) => {
    this.arr = data;
     this.dataSource = new MatTableDataSource<User>(this.arr);
   this.dataSource.paginator = this.paginator; });
   }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




// Add method
  onAddSave(f) {
    this._data.adduser(f.value).subscribe((data: any) => {
      this._data.getAlldesignations().subscribe((data: User[]) => {
        this.arr = data;
      });
      alert("designation Addded ");
    });

  }
  // edit method

  editEmp(editData) {
    this.id = editData.id;
    this.name = editData.name;

    this.description = editData.description;

  }

  onEditSave(f1) {
    var req = {
      id: this.id,
      name: f1.value.name,
      Description: f1.value.description,
      isactive: f1.value.isactive
    };

    console.log(req);
    this._data.adduser(req).subscribe((data: any) => {
      this._data.getAlldesignations().subscribe((data: any[]) => {
        this.arr = data;
      });
      alert("record edited");
    });
  }
// delete method

  onDelete(item) {
    console.log("item:",item);
    this._data.getDeleteData(item.id).subscribe((data: User) => {
      this.arr.splice(this.arr.indexOf(item), 1);
       alert("deleted");
      this.ngOnInit();
    });
  }
}

