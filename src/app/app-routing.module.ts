import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'crime', loadChildren: () => import('./FeatureModules/CrimeModule/crime.module').then(c => c.CrimeModule) },
    { path: '', redirectTo: '/crime/list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
