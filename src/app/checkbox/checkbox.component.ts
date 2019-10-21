import { Component, OnInit } from '@angular/core';

import { Static } from './checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  arr: any = [];

  arrarticle : Static[]=[

  new Static(1,'hii','hello'),
  new Static(2,'hii','hello'),
  new Static(3,'hii','hello'),
  new Static(4,'hii','hello'),
  new Static(5,'hii','hello'),
  new Static(6,'hii','hello'),
  new Static(7,'hii','hello'),
  new Static(8,'hii','hello'),
  new Static(9,'hii','hello'),
  new Static(10,'hii','hello'),
  new Static(11,'hii','hello'),
  new Static(12,'hii','hello'),
  new Static(13,'hii','hello'),
  new Static(14,'hii','hello'),
  new Static(15,'hii','hello'),
  new Static(16,'hii','hello'),
  new Static(17,'hii','hello'),
  new Static(18,'hii','hello'),
  new Static(19,'hii','hello'),
  new Static(20,'hii','hello'),


  ];

    constructor() { }

    ngOnInit() {
    }


    selcheckbox(item) {
      console.log(item);
      this.arr.push(item);
      console.log(this.arr.length);
      }

    onseldelete() {
      var result = confirm("Are you sure?");
      if (result) {
      for(let i=0;i<this.arr.length;i++)
      {
      if(this.arrarticle.find(x=>x==this.arr[i]))
      {
      this.arrarticle.splice(this.arrarticle.indexOf(this.arr[i]),1);
      }
      }
      }
    }
  }
