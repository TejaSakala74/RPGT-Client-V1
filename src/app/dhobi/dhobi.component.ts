import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dhobi',
    templateUrl: './dhobi.component.html',
    styleUrls: ['./dhobi.component.scss']
})
export class DhobiComponent implements OnInit {
    
    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
