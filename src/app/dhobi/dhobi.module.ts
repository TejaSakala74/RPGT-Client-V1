import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dhobiRoutingModule } from './dhobi-routing-module';
import { DhobiComponent } from './dhobi.component';
import { HeaderComponent } from '../shared/header/header.component';
import { NavmenuComponent } from '../shared/navmenu/navmenu.component';
import { FooterComponent } from '../shared/footer/footer.component';


@NgModule({
    imports: [
        CommonModule,
        dhobiRoutingModule
    ],
    declarations: [
        DhobiComponent,
        HeaderComponent,
        NavmenuComponent,
        FooterComponent
    ]
})
export class DhobiModule {}

