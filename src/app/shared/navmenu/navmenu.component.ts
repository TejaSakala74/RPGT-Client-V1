import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.tempData='L';
  }
  tempData:any;

  itemClick(value)
  {
    this.tempData=value;
    console.log(value,'sdsdsdsd')
  }
}
