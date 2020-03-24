import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCrimeComponent } from './create-crime/create-crime.component';
import { ListCrimesComponent } from './list-crimes/list-crimes.component';
import { DetailCrimeComponent } from './detail-crime/detail-crime.component';
import { CreateCrimeCanDeactivateGuardService } from '../../Services/create-crime-can-deactivate-guard.service';
import { CrimeDetailsGuardService } from '../../Services/crime-details-guard.service';
import { PageNotFoundComponent } from '../../Components/PageNotFound/page-not-found.component';


const routes: Routes = [
    {
        path: 'create', component: CreateCrimeComponent,
        canDeactivate: [CreateCrimeCanDeactivateGuardService]
    },
    { path: 'list', component: ListCrimesComponent },
    {
        path: 'list/:id', component: DetailCrimeComponent,
        canActivate: [CrimeDetailsGuardService]
    },
    { path: 'notfound', component: PageNotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrimeRoutingModule { }
