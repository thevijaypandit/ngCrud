import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrimeRoutingModule } from './crime-routing.module';
import { CreateCrimeComponent } from './create-crime/create-crime.component';
import { DisplayCrimeComponent } from './display-crime/display-crime.component';
import { DetailCrimeComponent } from './detail-crime/detail-crime.component';
import { ListCrimesComponent } from './list-crimes/list-crimes.component';
import { CrimeFilterPipe } from '../../Pipes/crime-filter.pipe';
import { CrimeDetailsGuardService } from '../../Services/crime-details-guard.service';
import { PageNotFoundComponent } from '../../Components/PageNotFound/page-not-found.component';


@NgModule({
    declarations: [CreateCrimeComponent, DisplayCrimeComponent, DetailCrimeComponent, ListCrimesComponent, CrimeFilterPipe, PageNotFoundComponent],
    imports: [
        CommonModule,
        CrimeRoutingModule,
        FormsModule
    ],
    providers: [CrimeDetailsGuardService],
})
export class CrimeModule { }
