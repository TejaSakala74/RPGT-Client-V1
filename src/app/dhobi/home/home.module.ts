import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import { DhobiModule } from '../dhobi.module'
import { TopsComponent } from '../tops/tops.component';
import { LaundryComponent } from '../laundry/laundry.component';
import { BeddingComponent } from '../bedding/bedding.component';
import { SuitsComponent } from '../suits/suits.component';
import { TrousersComponent } from '../trousers/trousers.component';
import { DressesComponent } from '../dresses/dresses.component';
import { OutdoorComponent } from '../outdoor/outdoor.component';
import { AccessoriesComponent } from '../accessories/accessories.component';
import { HouseComponent } from '../house/house.component';
import { BusinessComponent } from '../business/business.component'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DhobiModule
  ],
  bootstrap: [],
  declarations: [
    HomeComponent,
    TopsComponent,
    LaundryComponent,
    BeddingComponent,
    SuitsComponent,
    TrousersComponent,
    DressesComponent,
    OutdoorComponent,
    AccessoriesComponent,
    HouseComponent,
    BusinessComponent
  ]
})
export class HomeModule { }
