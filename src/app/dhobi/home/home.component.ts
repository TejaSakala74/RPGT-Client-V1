import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,    
})
export class HomeComponent implements OnInit {

  subContent:any

  constructor() { }

  ngOnInit() {
    
  }

  scroll(element: any)
  {
    element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
  }

  myswiperight(value){
    value.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
  }
  
  myswipeleft(value){
    value.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
  }

  menuClick(value)
  {
    value.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.subContent = value
  }
  
}

