import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrimeRoutingModule } from './crime-routing.module';
import { CreateCrimeComponent } from './create-crime/create-crime.component';
import { ListCrimeComponent } from './list-crime/list-crime.component';
import { DisplayCrimeComponent } from './display-crime/display-crime.component';
import { DetailCrimeComponent } from './detail-crime/detail-crime.component';
import { ListCrimesComponent } from './list-crimes/list-crimes.component';


@NgModule({
  declarations: [CreateCrimeComponent, ListCrimeComponent, DisplayCrimeComponent, DetailCrimeComponent, ListCrimesComponent],
  imports: [
    CommonModule,
    CrimeRoutingModule
  ]
})
export class CrimeModule { }
