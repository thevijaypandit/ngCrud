import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateCrimeComponent } from '../FeatureModules/CrimeModule/create-crime/create-crime.component';

@Injectable({
    providedIn: 'root'
})
export class CreateCrimeCanDeactivateGuardService implements CanDeactivate<CreateCrimeComponent> {

    constructor() { }
    //canDeactivate(component: CreateCrimeComponent): boolean {
    //    if (component.createCrimeForm.dirty) {
    //        return confirm('Are you sure you want to discard your changes?');
    //    }
    //    return true;
    //}

    canDeactivate(component: CreateCrimeComponent): boolean {
        if (component.createCrimeForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }

        return true;
    }
}
